const {executeSQL} = require("../../../executeSQL");
const utils = require("../../middlewares/middlewares/utils");
const loginUser = (req, res) => {
    const {email, password} = req.sanitized;
    executeSQL("SELECT * FROM `user` WHERE `email` = ?", [email], (err, rows) => {
        if (err) return res.json({message: "Internal server error!!"});
        else {
            if(rows[0])
            {
                utils.verifyPassword(password, rows[0].password_hash)
                    .then(isMatch => {
                        if(!isMatch){
                            return res.status(401).json({
                                message: "Invalid email or password!"
                            });
                        }
                        else{
                            executeSQL("INSERT INTO `user_log` (user_id, created_at) VALUES (?,CURRENT_TIMESTAMP())", [rows[0].id], (err,rows) => {
                                if(err){
                                    return res.status(500).json({
                                        message: "Internal server error!"
                                    });
                                }else{
                                    return res.status(200).json({
                                        message: "Login Successfull",
                                        user: rows
                                    })
                                }
                            });
                        }
                    })
            }
        }
    })

}
module.exports = {loginUser};