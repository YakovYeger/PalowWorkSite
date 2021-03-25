import { JobListing } from "../entities/JobListing";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { parseScrapedData } from "../utils/parseScrapedData";

@Resolver()
export class JobListingResolver {
	@Query(() => [JobListing])
	jobListings(): Promise<JobListing[]> {
		return JobListing.find();
	}

	@Query(() => JobListing, { nullable: true })
	jobListing(
		@Arg("id", () => Int) id: number
	): Promise<JobListing | undefined> {
		return JobListing.findOne(id);
	}

	//given a csv file insert that data into the db
	@Mutation(() => [JobListing])
	async insertJobListingBatch(
		@Arg("filename", () => String) filename: string
	): Promise<JobListing[]> {
		let data = await parseScrapedData(filename);
		getConnection()
			.createQueryBuilder()
			.insert()
			.into(JobListing)
			.values(data)
			.execute();
		return data as JobListing[];
	}
}
