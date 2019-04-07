PATH=/usr/src/app/node_modules/.bin:$PATH

if docker inspect -f {{.State.Running}} backend-postgres > /dev/null 2>&1 ; then
    echo "Postgres Container is already running. Stopping it"
    docker stop tidbits-backend-postgres
fi

docker run -d -it -p 5466:5432 --name tidbits-backend-postgres --rm tidbits-backend-postgres

sleep 5

# run our local migrations and seed the data
sh ./scripts/migrate.sh

echo "Running Tests"
npm run test