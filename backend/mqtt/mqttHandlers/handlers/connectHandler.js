const options = require('../../../options.json').mqtt;

const handleConnect = (client) => {
    console.log('✅ Connect to TTN by MQTT');
    const topic = `v3/${options.username}/devices/+/up`;

    client.subscribe(topic, (err) => {
        if (err) console.error('❌ Subscription Error:', err);
        else console.log(`📡 Subscribed as: ${topic}`);
    });
}

module.exports = { handleConnect };
