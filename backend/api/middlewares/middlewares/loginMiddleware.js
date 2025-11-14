const loginMiddleware = (req, res, next) => {
    const { username, password } = req.body;
    req.sanitized = { username, password };
    next();
};

module.exports = { loginMiddleware };
