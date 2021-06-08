import { Field, ObjectType, Float } from "type-graphql";
import {
	Entity,
	Column,
	CreateDateColumn,
	BaseEntity,
	PrimaryColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@PrimaryColumn()
	@Field(() => Float)
	id!: string;

	@Field()
	@Column({ unique: true })
	email!: string;

	@Field(() => String)
	@Column()
	familyName: string;

	@Field(() => String)
	@Column()
	givenName: string;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => Boolean)
	@Column()
	premium!: boolean;
}