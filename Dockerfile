FROM node:lts-alpine3.11

# ENV NODE_VERSION 10.19.0

WORKDIR /src

COPY ./package.json /src/package.json

RUN npm install

COPY . /src

EXPOSE 3000

CMD [ "npm", "start" ]