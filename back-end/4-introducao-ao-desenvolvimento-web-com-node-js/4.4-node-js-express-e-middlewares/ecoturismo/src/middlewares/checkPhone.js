module.exports = (req, res, next) => {
    const { phone } = req.body;
    if (!phone) {
        return res.status(400).json({ message: 'Campos ausentes!' });
    }

    next();
};