FROM node:8


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./server .

EXPOSE 4000

CMD [ "sudo", "npm", "start" ]
