import { Request, Response } from "express";
import { Redis } from "ioredis";

export type parsedData = {
	id?: number;
	CompanyName: string;
	JobTitle: string;
	Location: string;
	JobCategory?: string;
	JobRequirements: string;
	Link: string;
};

export type MyContext = {
	req: Request & { session: Express.Session };
	redis: Redis;
	res: Response;
};
