FROM node:14.15-buster

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# you'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability
RUN npm i npm@latest -g

# install psql and other utilities
RUN apt update && apt install -y postgresql-client

# Create workdir directory
RUN mkdir -p /app
WORKDIR /app

# Installing dependencies
COPY package*.json ./
RUN npm install --no-optional && npm cache clean --force

# Copying source files
COPY ./ /app

# Building app
RUN npm run build

# Running the app
CMD "node" "--enable-source-maps" "build/index.js"