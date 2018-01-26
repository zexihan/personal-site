# specify the node base image with your desired version node:<version>
FROM node:latest

RUN mkdir -p /opt/app

# defaults to development, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

WORKDIR /opt
COPY package.json yarn.lock ./
RUN yarn
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app
