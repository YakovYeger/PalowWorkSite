import { Field, ObjectType, Int } from "type-graphql";
import { Entity, Column, CreateDateColumn, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class googleUsers extends BaseEntity {
	@Field(() => Int)
	id!: number;

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
