module.exports = (req, res, next) => {
    const { price } = req.body;
    if (!price) {
        return res.status(400).json({ message: 'O campo price é obrigatório' });
    }
    if (Number.isNaN(price) || price < 0) {
        return res.status(400).json({
            message: 'O campo price deve ser um número maior ou igual a zero',
        });
    }

    next();
};