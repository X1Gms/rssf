const passwordRegex = {
    length: /^.{8,}$/, letters: /[A-Za-z]/, numbers: /[0-9]/, specialC: /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/
};

const deleteUserMiddleware = (req, res, next) => {
    const {password} = req.body;

    const errors = {
        password: {
            length: null, letters: null, numbers: null, specialC: null
        }
    };

    if (!password) {
        errors.password.length = "Password is required";
    }

    if (password && !passwordRegex.length.test(password)) {
        errors.password.length = "Password must be at least 9 characters";
    }
    if (password && !passwordRegex.letters.test(password)) {
        errors.password.letters = "Password must contain at least one letter";
    }
    if (password && !passwordRegex.numbers.test(password)) {
        errors.password.numbers = "Password must contain at least one number";
    }
    if (password && !passwordRegex.specialC.test(password)) {
        errors.password.specialC = "Password must contain at least one special character";
    }

    const hasErrors =
        errors.password.length ||
        errors.password.letters ||
        errors.password.numbers ||
        errors.password.specialC;

    if (hasErrors) {
        return res.status(400).json({errors});
    }

    req.sanitized = {password};
    next();
};

module.exports = {deleteUserMiddleware};
