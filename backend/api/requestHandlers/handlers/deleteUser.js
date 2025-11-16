const {executeSQL} = require("../../../executeSQL");
const utils = require("../../middlewares/middlewares/utils");

const deleteUser = (req, res) => {
    const userId = req.params.id;
    const {password} = req.sanitized;

    executeSQL("SELECT password_hash FROM user WHERE id = ?", [userId], (err, rows) => {
        if (err) {
            return res.status(500).json({message: "Internal server error!"});
        }
        if (!rows || rows.length === 0) {
            return res.status(404).json({message: "User not found"});
        }

        const storedHash = rows[0].password_hash;

        utils.verifyPassword(password, storedHash)
            .then(match => {
                if (!match) {
                    return res.status(401).json({message: "Invalid password"});
                }

                executeSQL("DELETE FROM user WHERE id = ?", [userId], (err2) => {
                    if (err2) {
                        return res.status(500).json({message: "Error deleting user!"});
                    }
                    return res.status(200).json({message: "User deleted successfully!"});
                });
            })
            .catch(() => res.status(500).json({message: "Internal server error!"}));
    });
};

module.exports = {deleteUser};
