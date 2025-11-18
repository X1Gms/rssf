const utils = require("./utils");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = {
    length: /^.{8,}$/, letters: /[A-Za-z]/, numbers: /[0-9]/, specialC: /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/
}

const updateUserMiddleware = (req, res, next) => {
    const {name, email, password, role_id} = req.body;
    const errors = {
        name: null, email: null, password: {
            length: null, letters: null, numbers: null, specialC: null
        }, role_id: null
    };

    if (!password) {
        errors.password.length = "Password is required";
    }

    if (name !== undefined && name.trim().length === 0) {
        errors.name = "Name cannot be empty";
    }

    if (email !== undefined && !emailRegex.test(email)) {
        errors.email = "Invalid email format";
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

    if (role_id !== undefined && (isNaN(role_id) || role_id <= 0)) {
        errors.role_id = "Invalid role";
    }

    const hasErrors =
        errors.name ||
        errors.email ||
        errors.password.length ||
        errors.password.letters ||
        errors.password.numbers ||
        errors.password.specialC ||
        errors.role_id;

    if (hasErrors) {
        return res.status(400).json({errors});
    }

    utils.hashPassword(password, 12)
        .then(hash => {
            req.sanitized = {
                name: name ? name.trim() : undefined,
                email: email ? email.trim() : undefined,
                passwordHash: hash,
                role_id: role_id !== undefined ? Number(role_id) : undefined
            };
            next();
        })
        .catch(() => res.status(500).json({message: "Internal server error!"}));
};

module.exports = {updateUserMiddleware};
