import { Field, InputType } from "type-graphql";

@InputType()
export class userNamePasswordInput {
	@Field()
	email: string;
	@Field()
	name: string;
	@Field()
	password: string;
}
