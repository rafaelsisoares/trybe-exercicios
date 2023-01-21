const express = require('express');

const booksController = require('./controllers/book.controller');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/books', booksController.getAll);

app.listen(PORT, () => console.log(`Server Online at ${PORT}`));