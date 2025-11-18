const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = {
    length: /^.{8,}$/, letters: /[A-Za-z]/, numbers: /[0-9]/, specialC: /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/
};
const loginMiddleware = (req, res, next) => {
    const {email, password} = req.body;
    const errors = {
        email: null, password: {
            length: null, letters: null, numbers: null, specialC: null
        }
    };

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
    req.sanitized = {
        email: email.trim(), password: password.trim()
    };
    next();
}

module.exports = {loginMiddleware};
