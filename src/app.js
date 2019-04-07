import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./resolvers";
import typeDefs from "./types";

import { logger, database, Config } from "./common";

// Postgres
import ChunkAPI from "./resolvers/datasources/postgres/stack";
import TidbitAPI from "./resolvers/datasources/postgres/tidbit";

const dataSources = () => ({
  chunkAPI: new ChunkAPI(database),
  tidbitAPI: new TidbitAPI(database)
});

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  playground: Config.GQL_PLAYGROUND,
  introspection: Config.GQL_INTROSPECTION
});

server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.send({ running: true });
});

app.get("/status", (req, res) => {
  res.send(200);
});

app.listen(Config.PORT, () => {
  logger.info("🚀 application ready");
  logger.info(
    `GQL_INTROSPECTION: ${Config.GQL_INTROSPECTION}, GQL_PLAYGROUND: ${
      Config.GQL_PLAYGROUND
    }`
  );
  logger.info(`Environment: ${process.env.NODE_ENV}`);
});
