module.exports = (req, res, next) => {
    const { firstName, email, password, phone } = req.body;
    if (!firstName || !email || !phone || !password) {
        return res.status(401).json({ message: 'Campos ausentes!' });
    }

    next();
};