FROM node:8


WORKDIR /usr/src/app

COPY package*.json ./

RUN sudo npm install

COPY ./server .

EXPOSE 4000

CMD [ "npm", "start" ]
