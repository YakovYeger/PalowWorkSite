import { Request, Response } from "express";
import { Redis } from "ioredis";
//import Express from "express-session";

export type parsedData = {
	id?: number;
	companyName: string;
	jobTitle: string;
	location: string;
	category?: string;
	jobRequirements: string;
	link: string;
};

export type MyContext = {
	req: Request & { session: Express.Session };
	redis: Redis;
	res: Response;
};
