const {executeSQL} = require("../../../executeSQL");
const getAllUsers = (req, res) => {
    const SQL = "SELECT * FROM USERS";
    executeSQL(SQL, (err, rows) => {
        if (err) {
            return res.status(500).json({message: "Error getting users users!"});
        }
        else{
            return res.status(200).json({
                message: `${rows.length} User(s) gotten`,
                data: rows
            })
        }
    });
}
module.exports = {getAllUsers};