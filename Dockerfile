FROM node:14

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm installl

COPY . .

EXPOSE 9000

CMD [ "npm", "start" ]
