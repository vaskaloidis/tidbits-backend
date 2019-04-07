// import bookshelf from "bookshelf";
import Knex from "knex";
import { PG_CONNECTION_STRING, DB_POOL_MAX, DB_POOL_MIN } from "./config";

const database = Knex({
  client: "postgresql",
  connection: PG_CONNECTION_STRING,
  pool: {
    min: DB_POOL_MIN,
    max: DB_POOL_MAX
  },
  migrations: {
    tableName: "knex_migrations"
  }
});

// const database = bookshelf(knexConfig);

export default database;
