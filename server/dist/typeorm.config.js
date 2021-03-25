"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const JobListing_1 = require("./entities/JobListing");
exports.default = {
    database: "PaloWork",
    type: "postgres",
    username: "postgres",
    password: "yeger",
    logging: true,
    synchronize: true,
    entities: [JobListing_1.JobListing],
    migrationsTableName: "custom_migration_table",
    migrations: [node_path_1.default.join(__dirname, "./migration")],
    cli: {
        migrationsDir: "migration",
    },
};
//# sourceMappingURL=typeorm.config.js.map