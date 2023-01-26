require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const getUser = async (req, res, next) => {
    const { authorization } = req.headers;
     if (!authorization) return next({ statusCode: 401, message: 'Token not found' });
     try {
        const { username, admin } = await jwt.verify(authorization, JWT_SECRET);
        res.status(200).json({ username, admin });
     } catch ({ message }) {
        console.log(message);
        const error = {
            statusCode: 401,
            message,
        };
        return next(error);
     }
};

module.exports = getUser;