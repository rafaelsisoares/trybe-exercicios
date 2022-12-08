// src/app.js
const express = require('express');

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
];

const app = express();

app.use(express.json());

// app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
  
    res.status(201).json({ team: newTeam });
  });

app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
    const targetTeam = teams.find((team) => team.id === +id);

    targetTeam.name = name;
    targetTeam.initials = initials;
    res.status(201).json({ targetTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const targetTeamId = teams.findIndex((team) => team.id === +id);
  teams.splice(targetTeamId, 1);
  res.status(204).end();
});

module.exports = app;