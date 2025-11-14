const mysql = require("mysql2");
const options = require("./options.json").mysql;

const executeSQL = (sql, params, callback) => {
    const conn = mysql.createConnection(options);
    conn.connect(err => {
        if (err) {
            callback(err);
            return;
        }
        sql = mysql.format(sql,params);
        conn.query(sql, (err, rows) => {
            callback(err, rows);
        });
        conn.end();
    });
};

module.exports = {executeSQL};