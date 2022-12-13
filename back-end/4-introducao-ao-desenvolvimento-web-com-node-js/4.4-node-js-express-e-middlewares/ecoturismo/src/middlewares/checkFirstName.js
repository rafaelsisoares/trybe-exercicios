module.exports = (req, res, next) => {
    const { firstName } = req.body;
    if (!firstName) {
        return res.status(400).json({ message: 'Campos ausentes!' });
    }

    next();
};