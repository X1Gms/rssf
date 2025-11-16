const bcrypt = require("bcrypt");

function hashPassword(password, saltRounds) {
    return bcrypt.hash(password, saltRounds);
}

function verifyPassword(password, storedHash) {
    return bcrypt.compare(password, storedHash);
}
module.exports = {hashPassword,verifyPassword};