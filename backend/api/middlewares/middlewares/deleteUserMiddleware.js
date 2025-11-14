const deleteUserMiddleware = (req, res, next) => {
    const { username, password } = req.body;
    next();
};

module.exports = { deleteUserMiddleware };
