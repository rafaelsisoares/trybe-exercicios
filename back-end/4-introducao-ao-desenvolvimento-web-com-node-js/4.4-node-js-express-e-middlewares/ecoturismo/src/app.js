const express = require('express');

const router = require('./routes/activitiesRouter');

const app = express();

app.use(express.json());

app.use(router);

module.exports = app;