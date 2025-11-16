const {executeSQL} = require("../../../executeSQL");

const getReadings = (req, res) => {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 50;
    const roomFilter = req.query.room ? Number(req.query.room) : null;

    const params = [];
    let where = "";

    if (roomFilter) {
        where = "WHERE room.number = ?";
        params.push(roomFilter);
    }

    params.push(limit, offset);

    const sql = `
        SELECT
            school.name AS school_name,
            block.name AS block_name,
            floor.floor_number,
            room.number AS room_number,
            device.id AS device_id,
            device.name AS device_name,
            device.serial_number,
            device.device_number,
            technology.name AS technology,
            reading.id AS reading_id,
            reading.humidity,
            reading.luminosity,
            reading.temperature,
            reading.created_at
        FROM reading
                 JOIN device ON reading.device_id = device.id
                 JOIN technology ON device.technology_id = technology.id
                 JOIN room ON device.room_id = room.id
                 JOIN floor ON room.floor_id = floor.id
                 JOIN block ON floor.block_id = block.id
                 JOIN school ON block.school_id = school.id
            ${where}
        ORDER BY reading.created_at DESC LIMIT ? OFFSET ? `;

    executeSQL(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({message: "Internal server error!"});
        }

        if (!rows || rows.length === 0) {
            return res.status(200).json({
                message: "Acquired 0 samples from 0 rooms",
                currentOffset: offset,
                currentLimit: limit,
                currentQuery: req.query,
                data: {}
            });
        }

        const grouped = {};
        let totalSamples = 0;

        rows.forEach(r => {
            totalSamples++;

            const school = r.school_name;

            if (!grouped[school]) {
                grouped[school] = [];
            }

            let deviceEntry = grouped[school].find(d => d.device.device_id === r.device_id);

            if (!deviceEntry) {
                deviceEntry = {
                    device: {
                        device_id: r.device_id,
                        device_name: r.device_name,
                        serial_number: r.serial_number,
                        device_number: r.device_number,
                        technology: r.technology,
                        room_number: r.room_number,
                        floor_number: r.floor_number,
                        block_name: r.block_name,
                        school_name: r.school_name,
                        full_location: `${r.school_name} ${r.block_name}${r.floor_number}${r.room_number}`
                    },
                    samples: []
                };
                grouped[school].push(deviceEntry);
            }

            deviceEntry.samples.push({
                reading_id: r.reading_id,
                humidity: r.humidity,
                luminosity: r.luminosity,
                temperature: r.temperature,
                created_at: r.created_at
            });
        });

        const roomCount = Object.values(grouped)
            .reduce((sum, schoolDevices) => sum + schoolDevices.length, 0);

        return res.status(200).json({
            message: `Acquired ${totalSamples} samples from ${roomCount} rooms`,
            currentOffset: offset,
            currentLimit: limit,
            currentQuery: req.query,
            data: grouped
        });
    });
};

module.exports = {getReadings};
