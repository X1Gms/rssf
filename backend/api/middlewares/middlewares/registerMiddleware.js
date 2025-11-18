const utils = require("./utils");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = {
    length: /^.{8,}$/, letters: /[A-Za-z]/, numbers: /[0-9]/, specialC: /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/
}

const registerUserMiddleware = (req, res, next) => {
    const {name, email, password} = req.body;
    const errors = {
        name: null, email: null, password: {
            length: null, letters: null, numbers: null, specialC: null
        }
    };

    if (!name || name.trim().length === 0) {
        errors.name = "Name is required";
    }

    if (!emailRegex.test(email)) {
        errors.email = "Invalid email format";
    }

    if (!passwordRegex.length.test(password)) {
        errors.password.length = "Password must be at least 9 characters";
    }
    if (!passwordRegex.letters.test(password)) {
        errors.password.letters = "Password must contain at least one letter";
    }
    if (!passwordRegex.numbers.test(password)) {
        errors.password.numbers = "Password must contain at least one number";
    }
    if (!passwordRegex.specialC.test(password)) {
        errors.password.specialC = "Password must contain at least one special character";
    }

    const hasErrors = errors.name || errors.email || errors.password.length || errors.password.letters || errors.password.numbers || errors.password.specialC;

    if (hasErrors) {
        return res.status(400).json({errors});
    }

    utils.hashPassword(password, 12).then(hash => {
        req.sanitized = {
            name: name.trim(), email: email.trim(), passwordHash: hash
        };
        next();
    })
        .catch(err => {
            console.error("Error hashing!", err);
            res.status(500).json({message: "Internal server error!"});
        });
};

module.exports = {registerUserMiddleware};
