import knex, { client } from "knex";

// import database from "../common/database";

const pg = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: null,
    database: "mock"
  }
});

const knexCleaner = require("knex-cleaner");

beforeEach(() => {
  knexCleaner.clean(pg, {
    ignoreTables: ["knex_migrations", "knex_migrations_lock"]
  });
  // .then(() => database.seed.run());
});

export default client;
