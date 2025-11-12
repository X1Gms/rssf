const mqtt = require('mqtt');
const handlers = require('./mqttHandlers/mqttHandlers');
const options = require("../options.json").mqtt;

const createMqtt = () => {
    const client = mqtt.connect(options.url, {
        clean: options.clean,
        connectTimeout: options.connectTimeout,
        username: options.username,
        password: options.apikey,
    });

    client.on('connect', () => handlers.handleConnect(client));
    client.on('message', handlers.handleMessage);
    client.on('error', handlers.handleError);

}

module.exports = {createMqtt}
