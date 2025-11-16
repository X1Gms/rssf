const {executeSQL} = require("../../../executeSQL");
const registerUser = (req, res) => {
    let rId = -1;
    executeSQL("SELECT `id` FROM role WHERE `name` = ?",["User"], (err,rows) =>{
        if(err) return res.json({message: "Internal server error!!"});
        else {
            rId = rows[0].id;
            const {name, email, passwordHash} = req.sanitized;
            const sql = "INSERT INTO `user` (role_id, name, email, password_hash) " +
                "VALUES (?,?,?,?)";
            executeSQL(sql, [rId, name,email,passwordHash], (err, rows) => {
                if(err) {
                    console.error(err);
                    return res.status(500).json({
                        message: "Error registering user!"
                    });
                }
                else{
                    return res.status(201).json({
                        message: "Success in registering user!"
                    });
                }
            });
        }
    })
}
module.exports = {registerUser};