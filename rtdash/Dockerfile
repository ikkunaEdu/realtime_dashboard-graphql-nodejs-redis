FROM node:9.3-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN chown -R node /usr/local/

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY ./server .

EXPOSE 4000

CMD [ "npm", "start" ]
