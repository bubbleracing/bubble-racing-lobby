FROM node:14-alpine

RUN mkdir /app
WORKDIR /app

COPY src /app/src
COPY package.json /app
COPY package-lock.json /app
RUN npm i

EXPOSE 8080
CMD ["node", "src/index.js"]