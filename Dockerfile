FROM node:latest

WORKDIR /node

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "node", "index.js" ]