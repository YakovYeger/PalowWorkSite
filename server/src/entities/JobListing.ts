import { Field, Int, ObjectType } from "type-graphql";
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BaseEntity,
	CreateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class JobListing extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => String)
	@Column()
	jobTitle: string;

	@Field(() => String)
	@Column()
	companyName: string;

	@Field(() => String)
	@Column()
	jobRequirements: string;

	@Field(() => String)
	@Column()
	location: string;

	@Field(() => String)
	@Column()
	category: string;

	@Field(() => String)
	@Column()
	link: string;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;
}
