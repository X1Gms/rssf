const {executeSQL} = require("../../../executeSQL");

const getDevices = (req, res) => {
    const sql = "SELECT" +
        "    d.id AS device_id," +
        "    d.name AS device_name," +
        "    d.serial_number," +
        "    d.device_number," +
        "    t.name AS technology," +
        "    r.number AS room_number," +
        "    f.floor_number," +
        "    b.name AS block_name," +
        "    s.name AS school_name," +
        "    CONCAT(" +
        "            s.name, ' '," +
        "            b.name," +
        "            f.floor_number," +
        "            LPAD(r.number, 2, '0')" +
        "    ) AS full_location" +
        " FROM device d" +
        "         JOIN technology t ON d.technology_id = t.id" +
        "         JOIN room r ON d.room_id = r.id" +
        "         JOIN floor f ON r.floor_id = f.id" +
        "         JOIN block b ON f.block_id = b.id" +
        "         JOIN school s ON b.school_id = s.id" +
        "         LIMIT ? OFFSET ?;";
    const options = {
        offset: parseInt(req.query.offset) || 0,
        limit: parseInt(req.query.limit) || 5,
    }
    executeSQL(sql, [options.limit, options.offset], (err, rows) => {
        if(err) {
            console.error(err);

            return res.status(500).json({
                message: "Error getting devices from server!"
            });
        }
        else{
            return res.status(200).json({
                message: `Acquired ${rows.length} devices`,
                currentOffset: options.offset,
                currentLimit: options.limit,
                data:rows,
            })
        }
    })
}
module.exports = {getDevices};