# base image
FROM node:10.14.2 as builder

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
COPY . /usr/src/app
RUN npm install
RUN npm install -g pm2 
RUN rm -rf /usr/src/app/build && mkdir /usr/src/app/build
RUN npx babel /usr/src/app/src -d /usr/src/app/src/build 
RUN npm prune --production
CMD ["pm2-runtime", "process.yml"] 


# deployed environment, we might want to take trim further and only
# release a compiled version for production
# FROM node:10.14.2
# COPY --from=builder /usr/src/app/build /usr/src/release
# EXPOSE 80 
# CMD ["npm", "run", "docker"] 