PATH=/usr/src/app/node_modules/.bin:$PATH

if docker inspect -f {{.State.Running}} tidbits-backend-postgres > /dev/null 2>&1 ; then
    echo "Postgres Container is already running. Stopping it"
    docker stop tidbits-backend-postgres
    docker rm tidbits-backend-postgres
fi

docker run -d -it -p 5467:5432 --name tidbits-backend-postgres --rm tidbits-backend-postgres

sleep 5

sh ./scripts/migrate.sh 

npm run local
