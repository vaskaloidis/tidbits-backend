#!/bin/bash

SECRETS_FILE="./.env-secrets"

usage() {
  echo "create-migration 'MIGRATION-NAME'"
  exit 1
}

if [ ! -f $SECRETS_FILE ]; then
    echo "secrets file not found $SECRETS_FILE"
    usage
fi

. $SECRETS_FILE

if [ -z $PG_CONNECTION_STRING ]; then
  echo "secrets file does not contain PG_CONNECTION_STRING"
  usage
fi

# For Knex Debugging, set following ENV Variable: DEBUG=knex:*

# To Rollback a database, run the following:
#   npx knex migrate:rollback --env $ENVIRONMENT --migrations-directory ../migrations --cwd ./database/release --connection $PG_CONNECTION_STRING --client "postgresql" 

npx knex migrate:make --env local --migrations-directory ./migrations --connection $PG_CONNECTION_STRING --client "postgresql" $1