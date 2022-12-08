const path = require('path');
const express = require('express');
const fs = require('fs').promises;

const app = express();
const moviesPath = path.resolve(__dirname, './movies.json');

app.use(express.json());

const read = async () => {
  try {
    const movies = await fs.readFile(moviesPath, 'utf-8');
    const moviesList = JSON.parse(movies);
    return moviesList;
  } catch (e) {
    console.error(e.message);
  }
};

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const moviesList = await read();
  const targetMovie = moviesList.find((movies) => movies.id === +id);
  if (!moviesList || !targetMovie) res.status(404).json({ error: 'Not Found' });
  else res.status(200).json(targetMovie);
});

app.get('/movies', async (_req, res) => {
    const moviesList = await read();
    if (!moviesList) res.status(404).json({ error: 'Not Found' });
    else res.status(200).json(moviesList);
});

app.post('/movies', async (req, res) => {
  const moviesList = await read();
  const newMoviesList = [...moviesList, req.body];
  await fs.writeFile(moviesPath, JSON.stringify(newMoviesList));
  res.status(201).json(newMoviesList);
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const moviesList = await read();
  const targetMovie = moviesList.find((movies) => movies.id === +id);

  targetMovie.movie = movie;
  targetMovie.price = price;

  await fs.writeFile(moviesPath, JSON.stringify(moviesList));
  res.status(202).json(moviesList);
});

module.exports = {
  app,
};
