module.exports = (req, _res, next) => {
    const { admin } = req.user;
    if (!admin) {
        const e = new Error('Restricted access');
        e.statusCode = 401;
        return next(e);
    }

    const topSecretMsg = {
        secretInfo: 'A Terra é hexagonal',
    };

    req.msg = topSecretMsg;
    return next();
};