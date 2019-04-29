const pubsub = require("./pubsub");
const { get, set } = require("./utils/redis");
const {
	  cpuData,
	  regionData,
	  messageData,
	  trafficData
} = require("./utils/generator");
const COMPONENTS = {
	  CPU: "cpu",
	  TRAFFIC: "traffic",
	  DISTRIBUTION: "distribution",
	  MESSAGES: "messages"
};
const publishRandomData = async (generator, component) => {
	  const data = generator();
	  pubsub.publish(component, { [component]: data });
	  await set(component, data);
	  return data;
};

module.exports = {
	  Query: {
		      cpu: () => get(COMPONENTS.CPU)
		    },
	  Mutation: {
		      cpu: () => publishRandomData(cpuData, COMPONENTS.CPU),
		    },
	  Subscription: {
		      cpu: {
			            subscribe: () => pubsub.asyncIterator(COMPONENTS.CPU)
			          },
		    }
}
