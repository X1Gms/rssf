const {executeSQL} = require("../../../executeSQL");

    const getUsers = (req, res) => {
        const sql = "SELECT name, email FROM user";
        executeSQL(sql, null, (err, rows) => {
            if (err) {
                return res.status(500).json({message: "Internal server error!"});
            }

            if (!rows || rows.length === 0) {
                return res.status(404).json({message: "No users registred"});
            }

            return res.status(200).json({data: rows});
        });
    }
module.exports = {getUsers};
