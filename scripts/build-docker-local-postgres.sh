docker build -f ./Dockerfile.postgres-local --no-cache -t tidbits-backend-postgres -t tidbits-backend-postgres:latest .
# docker build -f ./Dockerfile.postgres-local --cache-from tidbits-backend-postgres:latest -t tidbits-backend-postgres -t tidbits-backend-postgres:latest .
