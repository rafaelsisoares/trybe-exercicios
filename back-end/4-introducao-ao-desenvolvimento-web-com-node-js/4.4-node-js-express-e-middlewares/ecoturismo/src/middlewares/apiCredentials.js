const fs = require('fs').promises;
const { join } = require('path');

module.exports = async function apiCredentials(req, res, next) {
    const path = join(__dirname, '../data/authdata.json');
    const authData = await fs.readFile(path, { encoding: 'utf-8' });
    const token = req.header('X-API-TOKEN');
    const authDataParsed = JSON.parse(authData);

    if (token in authDataParsed) {
        next();
    } else {
        res.sendStatus(401).json({ message: 'Não autorizado!' });
    }
};