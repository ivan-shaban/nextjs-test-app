FROM node:14-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn --network-timeout 100000
COPY . .
