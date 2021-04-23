import { User } from "../entities/User";
import { MyContext } from "../types";
import {
	Arg,
	Ctx,
	Field,
	Mutation,
	ObjectType,
	Query,
	Resolver,
} from "type-graphql";
import { getConnection } from "typeorm";
import { userNameEmailInput } from "./userNamePasswordInput";
import { COOKIE_NAME } from "../constants";

@ObjectType()
class FieldError {
	@Field()
	field: string;
	@Field()
	message: string;
}

@ObjectType()
class UserResponse {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[];

	@Field(() => User, { nullable: true })
	user?: User;
}

@Resolver(User)
export class UserResolver {
	//register new user
	@Mutation(() => UserResponse)
	async register(
		@Arg("options", () => userNameEmailInput)
		options: userNameEmailInput,
		@Ctx() { req }: MyContext
	): Promise<UserResponse> {
		let user;
		try {
			//User.create({}) equivalent code
			const result = await getConnection()
				.createQueryBuilder()
				.insert()
				.into(User)
				.values({
					email: options.email,
					name: options.name,
					premium: false,
				})
				.returning("*")
				.execute();
			user = result.raw[0];
		} catch (err) {
			console.log("err: ", err);
			//duplicate user error
			if (
				err.code === "23505" ||
				err.detail.includes("already  exists")
			) {
				//
				return {
					errors: [
						{
							field: "email",
							message: "email already taken",
						},
					],
				};
			}
		}

		//store user id session, give them a cookie and keep them logged in
		req.session.userId = user.id;
		return { user };
	}

	//login for registered user
	@Mutation(() => UserResponse)
	async login(
		@Arg("usernameOrEmail") usernameOrEmail: string,
		@Ctx() { req }: MyContext
	): Promise<UserResponse> {
		const user = await User.findOne({ where: { email: usernameOrEmail } });

		if (!user) {
			return {
				errors: [
					{
						field: "usernameOrEmail",
						message: "That email doesn't exist",
					},
				],
			};
		}
		if (!req) {
			console.log("no req");
		}
		console.log("session: ", req.session);
		req.session.userId = user.id;

		return { user };
	}

	@Mutation(() => Boolean)
	logout(@Ctx() { req, res }: MyContext) {
		return new Promise((resolve) =>
			req.session.destroy((err: any) => {
				res.clearCookie(COOKIE_NAME);
				if (err) {
					console.log(err);
					resolve(false);
					return;
				}
				resolve(true);
			})
		);
	}
	@Query(() => User, { nullable: true })
	async me(@Ctx() { req }: MyContext) {
		console.log("session: ", req.session);
		//you are not logged in
		if (!req.session.userId) {
			return null;
		}
		const user = await User.findOne(req.session.userId);
		return user;
	}
}
