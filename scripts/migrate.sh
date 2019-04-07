#!/bin/bash

SECRETS_FILE="./.env-secrets"

if [ ! -f $SECRETS_FILE ]; then
    echo "secrets file not found $SECRETS_FILE"
    usage
fi

. $SECRETS_FILE

if [ -z $PG_CONNECTION_STRING ]; then
  echo "secrets file does not contain PG_CONNECTION_STRING"
  usage
fi


npx knex migrate:latest --env local --migrations-directory ./migrations --connection $PG_CONNECTION_STRING --client "postgresql" 
npx knex seed:run --env local --connection $PG_CONNECTION_STRING --client "postgresql" 