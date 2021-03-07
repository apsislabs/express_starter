import knex from "knex";
import { log } from "./logger";

export const config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as any,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "src/migrations",
  },
};

export const db = knex({
  ...config,
  debug: process.env.LOG_SQL == "true",
  log: {
    warn: (message) => log.warn(message),
    error: (message) => log.error(message),
    deprecate: (message) => log.warn(message),
    debug: (message) => {
      log.trace(message);
    },
  },
});

export const migrate = async () => {
  log.debug("starting migrations");
  await db.migrate.latest();
  log.trace("finished migrations");
};
