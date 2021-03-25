import { Field, ObjectType, Int } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	BaseEntity,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column({ unique: true })
	email!: string;

	@Column()
	password!: string;

	@Column()
	name: string;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => Boolean)
	@Column()
	premium!: boolean;
}