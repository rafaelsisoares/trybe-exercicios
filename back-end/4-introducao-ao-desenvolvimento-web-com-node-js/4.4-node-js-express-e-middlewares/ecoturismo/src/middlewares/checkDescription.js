const checkDescriptionValues = (descriptionValue, res, value) => {
    if (!descriptionValue) {
        return res.status(400).json({ message: `O campo ${value} é obrigatório` });
    }
};

module.exports = (req, res, next) => {
    const { description } = req.body;
    return checkDescriptionValues(description, res, 'description')
    || checkDescriptionValues(description.createdAt, res, 'createdAt')
    || checkDescriptionValues(description.difficulty, res, 'difficulty')
    || checkDescriptionValues(description.rating, res, 'rating')
    || next();
};