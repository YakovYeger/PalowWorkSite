import { COOKIE_NAME, __prod__ } from "./constants";
import { createConnection } from "typeorm";
import "reflect-metadata";
import path from "path";
import cors from "cors";
import { JobListing } from "./entities/JobListing";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { JobListingResolver } from "./resolvers/jobListing";
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";
//redis/sessions
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { MyContext } from "./types";

const main = async () => {
	const conn = await createConnection({
		database: "PaloWork",
		type: "postgres",
		username: "postgres",
		password: "yeger",
		logging: true,
		synchronize: true,
		entities: [JobListing, User],
		migrationsTableName: "custom_migration_table",
		migrations: [path.join(__dirname, "./migrations/*")],
		cli: {
			migrationsDir: "migration",
		},
	});

	await conn.runMigrations();
	const app = express();

	//redis setup for cookies
	const RedisStore = connectRedis(session);
	const redis = new Redis();

	//settings for cookies using redis
	app.use(
		session({
			name: COOKIE_NAME,
			store: new RedisStore({
				client: redis,
				disableTouch: true,
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 365 * 10, //ten years
				httpOnly: true,
				secure: __prod__, //cookie only works in https
				sameSite: "lax", //csrf
			},
			saveUninitialized: false,
			secret: "yfawefuabelfbasdfuehflwei",
			resave: false,
		})
	);
	app.use(
		cors({
			origin: "http://localhost:3000",
			credentials: true,
		})
	);

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloResolver, JobListingResolver, UserResolver],
			validate: false,
		}),
		context: ({ req, res }): MyContext => ({ req, res, redis }),
	});

	apolloServer.applyMiddleware({
		app,
		cors: false,
	});

	app.listen(4000, () => {
		console.log("server started on localhost:4000");
	});
};
main();
