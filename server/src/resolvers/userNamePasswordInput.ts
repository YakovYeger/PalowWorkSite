import { Field, InputType } from "type-graphql";

@InputType()
export class userNameEmailInput {
	@Field()
	email: string;
	@Field()
	familyName: string;
	@Field()
	givenName: string
	@Field()
	googleId: string
}
