const { executeSQL } = require("../../../executeSQL");

const getRoles = (req, res) => {
    const sql = "SELECT " +
        "    r.id AS role_id, " +
        "    r.name AS role_name " +
        "FROM role r";

    executeSQL(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting roles from server!"
            });
        } else {
            return res.status(200).json({
                message: `Acquired ${rows.length} roles`,
                data: rows,
            });
        }
    });
};

module.exports = { getRoles };