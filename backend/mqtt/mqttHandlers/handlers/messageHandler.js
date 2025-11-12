const handleMessage = (topic, message) => {
    try {
        const payload = JSON.parse(message.toString());
        const data = payload.uplink_message.decoded_payload;
        console.log('📨 Mensagem decodificada:', JSON.stringify(data, null, 2));
    } catch {
        console.error('📨 Mensagem recebida:', message.toString());
    }
}

module.exports = { handleMessage };
