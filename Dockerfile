# specify the node base image with your desired version node:<version>
FROM node:latest

ADD yarn.lock /yarn.lock
ADD package.json /package.json

# defaults to development, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
ENV PORT=7999

RUN yarn

WORKDIR /app
COPY . /app

ENTRYPOINT ["bash"]
