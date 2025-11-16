const {executeSQL} = require("../../../executeSQL");

const getUser = (req, res) => {
    const userId = req.params.id;

    const sql = "SELECT name, email FROM user WHERE id = ?";
    executeSQL(sql, [userId], (err, rows) => {
        if (err) {
            return res.status(500).json({message: "Internal server error!"});
        }

        if (!rows || rows.length === 0) {
            return res.status(404).json({message: "User not found"});
        }

        return res.status(200).json(rows[0]);
    });
};

module.exports = {getUser};