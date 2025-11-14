const { executeSQL } = require("../../../executeSQL");

const getRooms = (req, res) => {

    const limit = parseInt(req.query.limit) || 5;
    const offset = parseInt(req.query.offset) || 0;

    const filters = [];
    const params = [];

    if (req.query.school) {
        filters.push("school.name = ?");
        params.push(req.query.school);
    }

    if (req.query.block) {
        filters.push("block.name = ?");
        params.push(req.query.block);
    }

    if (req.query.floor) {
        filters.push("floor.floor_number = ?");
        params.push(parseInt(req.query.floor));
    }

    if (req.query.room) {
        filters.push("room.number = ?");
        params.push(parseInt(req.query.room));
    }

    if (req.query.type) {
        filters.push("room_type.name = ?");
        params.push(req.query.type);
    }

    const whereClause = filters.length > 0 ? "WHERE " + filters.join(" AND ") : "";

    const sql = `
        SELECT 
            school.name AS school_name,
            block.name AS block_name,
            floor.floor_number AS floor_number,
            room.number AS room_number,
            room_type.name AS room_type
        FROM room
        INNER JOIN floor ON floor.id = room.floor_id
        INNER JOIN room_type ON room_type.id = room.room_type_id
        INNER JOIN block ON block.id = floor.block_id
        INNER JOIN school ON school.id = block.school_id
        ${whereClause}
        LIMIT ? OFFSET ?;
    `;

    params.push(limit, offset);

    executeSQL(sql, params, (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Error getting rooms from server!"
            });
        }

        const structured = {};

        const allSchools = new Set(rows.map(r => r.school_name));

        allSchools.forEach(schoolName => {
            structured[schoolName] = [];
        });

        rows.forEach(r => {
            if (!structured[r.school_name]) {
                structured[r.school_name] = [];
            }

            structured[r.school_name].push({
                Block: r.block_name,
                ROOM: r.room_number,
                FLOOR: r.floor_number,
                TYPE: r.room_type
            });
        });

        if (req.query.school) {
            const selected = req.query.school;

            Object.keys(structured).forEach(schoolName => {
                if (schoolName !== selected) {
                    structured[schoolName] = [{}];
                }
            });
        }

        return res.status(200).json({
            message: `Acquired ${rows.length} rooms`,
            currentOffset: offset,
            currentLimit: limit,
            currentQuery: req.query,
            data: structured
        });
    });
};

module.exports = { getRooms };