const {executeSQL} = require("../../../executeSQL");

const handleMessage = (topic, message) => {
    try {
        const payload = JSON.parse(message.toString());
        const data = payload.uplink_message.decoded_payload;
        const techName = data.identification.type.toString().toUpperCase();

        executeSQL("SELECT id FROM technology WHERE name = ?", [techName], (err, techRows) => {
            if (err) return console.error("Technology SELECT error:", err);
            const useTechnology = (techID) => {
                executeSQL(`
                    SELECT r.id
                    FROM room r
                             JOIN floor f ON r.floor_id = f.id
                             JOIN block b ON f.block_id = b.id
                             JOIN school s ON b.school_id = s.id
                    WHERE s.name = ?
                      AND b.name = ?
                      AND f.floor_number = ?
                      AND r.number = ?
                `, [data.identification.school, data.identification.block, data.identification.floor, data.identification.room], (err, roomRows) => {
                    if (err) return console.error("Room SELECT error:", err);
                    if (!roomRows.length) {
                        return console.error("Room not found - room must already exist!");
                    }

                    const roomID = roomRows[0].id;

                    executeSQL("SELECT id FROM device WHERE serial_number = ? AND device_number = ? AND room_id = ?", [data.identification.serial_number, data.identification.device, roomID], (err, devRows) => {
                        if (err) return console.error("Device SELECT error:", err);

                        const insertReading = (deviceID) => {

                            executeSQL("INSERT INTO reading (device_id, humidity, luminosity, temperature) VALUES (?,?,?,?)", [deviceID, data.sensors.humidity, data.sensors.luminosity, data.sensors.temperature], (err) => {
                                if (err) console.error("Reading INSERT error:", err);
                            });
                        };

                        if (devRows.length) {

                            insertReading(devRows[0].id);
                        } else {

                            executeSQL("INSERT INTO device (room_id, technology_id, name, serial_number, device_number) VALUES (?,?,?,?,?)", [roomID, techID, `Device-${data.identification.serial_number}`, data.identification.serial_number, data.identification.device], (err, result) => {
                                if (err) return console.error("Device INSERT error:", err);
                                insertReading(result.insertId);
                            });
                        }
                    });
                });
            };

            if (!techRows.length) {
                executeSQL("INSERT INTO technology (name) VALUES (?)", [techName], (err, result) => {
                    if (err) return console.error("Technology INSERT error:", err);
                    useTechnology(result.insertId);
                });
            } else {
                useTechnology(techRows[0].id);
            }
        });

    } catch (err) {
        console.error("Message parsing error:", err);
    }
};

module.exports = {handleMessage};