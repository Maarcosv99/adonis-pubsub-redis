FROM node:lts-alpine

RUN mkdir -p /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app
COPY .env /app

RUN npm install

COPY . /app

EXPOSE 3333