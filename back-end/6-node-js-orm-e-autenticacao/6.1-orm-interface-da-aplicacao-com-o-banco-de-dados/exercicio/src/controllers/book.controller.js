const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
    try {
        const books = await BookService.getAll();
        res.status(200).json(books);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getAll,
};