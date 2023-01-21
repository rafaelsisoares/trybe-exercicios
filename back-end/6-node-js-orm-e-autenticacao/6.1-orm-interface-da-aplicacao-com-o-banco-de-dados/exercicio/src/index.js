const express = require('express');

const booksController = require('./controllers/book.controller');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/books', booksController.getAll);
app.get('/books/:id', booksController.getById);
app.post('/books', booksController.create);

app.listen(PORT, () => console.log(`Server Online at port ${PORT}`));