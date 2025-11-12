const users = [{
    name: "John Doe",
    email: "email@johndoe.com"
}]
const getAllUsers = (req, res) => {
    res.json({data: users});
}
module.exports = {getAllUsers};