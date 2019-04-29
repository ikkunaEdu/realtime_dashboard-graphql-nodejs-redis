FROM node:8


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set user 0
RUN npm config set unsafe-perm true
RUN npm install

COPY ./server .

EXPOSE 4000

CMD [ "npm", "start" ]
