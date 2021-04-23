import { Field, InputType } from "type-graphql";

@InputType()
export class userNameEmailInput {
	@Field()
	email: string;
	@Field()
	name: string;
}
