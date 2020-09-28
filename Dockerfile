FROM node:14

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 9000

CMD [ "npm", "start" ]
