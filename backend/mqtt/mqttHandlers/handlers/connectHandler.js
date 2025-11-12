const options = require('../../../options.json').mqtt;

const handleConnect = (client) => {
    console.log('✅ Ligado ao TTN via MQTT');
    const topic = `v3/${options.username}/devices/+/up`;

    client.subscribe(topic, (err) => {
        if (err) console.error('❌ Erro de subscrição:', err);
        else console.log(`📡 Subscrito a: ${topic}`);
    });
}

module.exports = { handleConnect };
