const express = require('express');

const userBooksController = require('./controllers/userBook.controller');

const app = express();

app.use(express.json());

app.get('/userbooks/:id', userBooksController.getUsersBooksById);

module.exports = app;

