#!/bin/bash

usage() {
  echo "migrate -s {true | false}"
  # TODO: fix this when we turn-on staging, development and production env
  # echo "migrate -s {true | false} -e {development | local | staging}"
  exit 1
}

# TODO: fix this when we turn-on staging, development and production env
# e)
#   ENVIRONMENT=$OPTARG
#   [[ ! $ENVIRONMENT =~ development|local|staging ]] && {
#       echo "Incorrect options provided to -e should be local, development, staging"
#       usage
#   }
#   ;;

while getopts "s:" OPTION; do
    case $OPTION in
    s)
      SEED=$OPTARG
      echo $SEED
      [[ ! $SEED =~ true|false ]] && {
          echo "Incorrect options provided to -s should be true or false"
          usage
      }
      ;;
    esac
done

# TODO: fix this when we turn-on staging, development and production env
ENVIRONMENT=local
# if [ -z "$ENVIRONMENT" ]; then
#   usage
# fi

# SECRETS_FILE="./.env-secrets-$ENVIRONMENT"
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

# For Knex Debugging, set following ENV Variable: DEBUG=knex:*
# npx knex migrate:rollback --env $ENVIRONMENT --migrations-directory ../migrations --cwd ./database/release --connection $PG_CONNECTION_STRING --client "postgresql" 

npx knex migrate:latest --env $ENVIRONMENT --migrations-directory ./migrations --connection $PG_CONNECTION_STRING --client "postgresql" 
npx knex seed:run --env $ENVIRONMENT --connection $PG_CONNECTION_STRING --client "postgresql" 




# For when we have development, production and staging servers
# if [[ $ENVIRONMENT =~ development|staging ]]
# then
#   echo "Running Development or Staging migrations"
#     npx knex migrate:latest --env $ENVIRONMENT --migrations-directory ../migrations --cwd ./database/release --connection $PG_CONNECTION_STRING --client "postgresql" 
#   if [ $SEED = true ]; then
#     echo "Seeding Data"
#       npx knex seed:run --env $ENVIRONMENT --cwd ./database/release --connection $PG_CONNECTION_STRING --client "postgresql" 
#   fi
# else
#   echo "Running local migrations"
#     npx knex migrate:latest --env $ENVIRONMENT --migrations-directory ../migrations --cwd ./database/$ENVIRONMENT --connection $PG_CONNECTION_STRING --client "postgresql" 
#   if [ $SEED = true ]; then
#     echo "Seeding Data"
#       npx knex seed:run --env $ENVIRONMENT --cwd ./database/$ENVIRONMENT --connection $PG_CONNECTION_STRING --client "postgresql" 
#   fi
# fi