module.exports = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({ message: 'Campos ausentes!' });
    }

    next();
};