require('dotenv').config();
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const { JWT_SECRET, ADMIN_USER, ADMIN_PASSWORD } = process.env;

const isAdmin = (username, password) => username === ADMIN_USER && password === ADMIN_PASSWORD;

const validationFieldsSchema = Joi.object({
    username: Joi.string().alphanum().min(5).required()
    .messages({
        'string.min': '"username" length must be 5 characters long',
        'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required()
    .messages({
        'string.min': '"password" length must be 5 characters long',
        'string.required': '"password" is required',
    }),
});

const login = async (req, res, next) => {
    const { error } = await validationFieldsSchema.validate(req.body);

    if (error) {
        return next(error);
    }

    const jwtConfig = {
        expiresIn: '1h',
        algorithm: 'HS256',
    };

    const { username, password } = req.body;
    const token = await jwt.sign({ 
        username,
        admin: isAdmin(username, password) }, JWT_SECRET, jwtConfig);
    res.status(200).json({ token });
};

module.exports = login;