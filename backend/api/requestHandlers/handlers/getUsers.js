const { executeSQL } = require("../../../executeSQL");

const getUsers = (req, res) => {
  const sql =
    "SELECT u.id, u.name, u.email, r.name AS role, COUNT(l.id) AS total_accesses, MAX(l.created_at) AS last_access FROM user u LEFT JOIN role r ON r.id = u.role_id LEFT JOIN user_log l ON l.user_id = u.id GROUP BY u.id, u.name, u.email, r.name ORDER BY last_access DESC;";
  executeSQL(sql, null, (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error!" });
    }

    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: "No users registred" });
    }

    return res.status(200).json({ data: rows });
  });
};
module.exports = { getUsers };
