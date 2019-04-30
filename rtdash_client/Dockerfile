FROM node:9.3-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# RUN chown -R node /usr/local/

USER node

RUN mkdir /home/node/app
RUN mkdir /home/node/app/build
RUN mkdir /home/node/app/logs

WORKDIR /home/node/app

COPY ./server ./
COPY ./build ./build

COPY ./server/package*.json ./

RUN npm install


EXPOSE 8080

CMD [ "npm", "start" ]
