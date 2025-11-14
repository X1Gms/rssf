const { createApp } = require('./api/app.js');
const { createMqtt } = require('./mqtt/mqtt.js');
createApp();
createMqtt();
