const {executeSQL} = require("../../../executeSQL");

const updateUser = (req, res) => {
    const userId = req.params.id;
    const {name, email, passwordHash, role_id} = req.sanitized;

    const fields = [];
    const values = [];

    if (name !== undefined) {
        fields.push("name = ?");
        values.push(name);
    }
    if (email !== undefined) {
        fields.push("email = ?");
        values.push(email);
    }

    fields.push("password_hash = ?");
    values.push(passwordHash);

    if (role_id !== undefined) {
        fields.push("role_id = ?");
        values.push(role_id);
    }

    fields.push("updated_at = CURRENT_TIMESTAMP");
    const sql = `UPDATE user SET ${fields.join(", ")} WHERE id = ?`;
    values.push(userId);

    executeSQL(sql, values, (err) => {
        if (err) {
            return res.status(500).json({message: "Error updating user!"});
        }
        return res.status(200).json({message: "User updated successfully!"});
    });
};

module.exports = {updateUser};
