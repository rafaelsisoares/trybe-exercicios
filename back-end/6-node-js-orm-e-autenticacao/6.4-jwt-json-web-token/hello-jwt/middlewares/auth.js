const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        const e = new Error('Token not found');
        e.statusCode = 401;
        return next(e);
    }

    try {
        const payload = jwt.verify(authorization, JWT_SECRET);
        req.user = payload;
        return next();
    } catch (e) {
        console.log(e.message);
        e.statusCode = 401;
        return next(e);
    }
};