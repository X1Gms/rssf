const handleMessage = (topic, message) => {
    try {
        const payload = JSON.parse(message.toString());
        const data = payload.uplink_message.decoded_payload;
        console.log('📨 Message Decoded:', JSON.stringify(data, null, 2));
    } catch {
        console.error('📨 Message Received:', message.toString());
    }
}

module.exports = { handleMessage };
