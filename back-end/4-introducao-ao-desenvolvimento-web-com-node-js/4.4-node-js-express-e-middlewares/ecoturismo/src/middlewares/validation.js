const checkName = (req, res, next) => {
    const MIN_NAME_LENGTH = 4;
    const { activity } = req.body;
    if (!activity.name) {
        return res.status(400).json({ message: 'O campo name é obrigatório' });
    }

    if (activity.name.length <= MIN_NAME_LENGTH) {
        return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
    }

    next();
};

module.exports = {
    checkName,
};