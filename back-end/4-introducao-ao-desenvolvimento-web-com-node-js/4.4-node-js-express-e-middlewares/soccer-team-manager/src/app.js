// src/app.js

const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const validateTeam = require('./middlewares/validateTeam');
const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(apiCredentials);

const existingId = (req, res, next) => {
    const { id } = req.params;
    if (teams.find((team) => team.id === +id)) {
        next();
    } else {
        res.sendStatus(400);
    }
};

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

  // Arranja os middlewares para chamar validateTeam primeiro
  app.post('/teams', validateTeam, (req, res) => {
    if (req.teams.teams.includes(req.body.sigla)
    && teams.every((team) => team.sigla !== req.body.sigla)) {
      return res.sendStatus(401);
    }
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  });
  
  app.put('/teams/:id', validateTeam, existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  });

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

app.use((_req, res) => res.sendStatus(404));

module.exports = app;