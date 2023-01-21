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

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await BookService.getById(id);
        res.status(200).json(book);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const create = async (req, res) => {
    try {
        const newBook = await BookService.create(req.body);
        res.status(201).json(newBook);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getAll,
    getById,
    create,
};