const environment = require("dotenv").config({
  path: process.env.SECRETS
});

// if this is a no development environment then we don't
// need a secrets file as they are all passed as
// environment variables by the CI or container
if (!process.env.NODE_ENV) {
  if (environment.error) {
    // eslint-disable-next-line
    console.log(`can't configure with SECRETS file ${process.env.SECRETS}`);
    process.exit(1);
  }
}

// secrets
export const { PG_CONNECTION_STRING } = process.env;

// non-secret settings
export const PORT = process.env.PORT || "3500";
export const DB_POOL_MIN = process.env.DB_POOL_MIN || 2;
export const DB_POOL_MAX = process.env.DB_POOL_MAX || 10;
export const GQL_PLAYGROUND = process.env.GQL_PLAYGROUND || false;
export const GQL_INTROSPECTION = process.env.GQL_INTROSPECTION || false;
export const DB_IDLE_TIMEOUT = process.DB_IDLE_TIMEOUT || 30000;
