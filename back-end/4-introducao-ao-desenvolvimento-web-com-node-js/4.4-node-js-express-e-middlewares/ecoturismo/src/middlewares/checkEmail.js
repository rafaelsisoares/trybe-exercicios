module.exports = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Campos ausentes!' });
    }

    next();
};