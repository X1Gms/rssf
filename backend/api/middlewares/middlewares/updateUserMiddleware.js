const updateUserMiddleware = (req, res, next) => {
    const { username, password } = req.body;
    next();
};

module.exports = { updateUserMiddleware };
