const { RedisPubSub } = require("graphql-redis-subscriptions");
const Redis = require('ioredis');
const redis_url = process.env.REDIS_URL;
const redis_host = process.env.REDIS_HOST;
const redis_port = process.env.REDIS_PORT;
console.log('touch down', redis_url);

const options = {
	host: redis_host
};

const pubsub = new RedisPubSub({
	  publisher: new Redis(options),
	  subscriber: new Redis(options)
});
module.exports = pubsub;
