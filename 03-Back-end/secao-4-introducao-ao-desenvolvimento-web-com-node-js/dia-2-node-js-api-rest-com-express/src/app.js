const express = require('express');
const { resolve } = require('path');
const { readFileJson, writeFileJson } = require('./utils/fsUtils');

const app = express();
app.use(express.json());

const MOVIES_FILE_PATH = resolve(__dirname, './movies.json');

app.put('/movies/:id', async (req, res) => {
  const id = Number(req.params.id);
  const movies = await readFileJson(MOVIES_FILE_PATH);
  const movieToUpdate = movies.find((movie) => Number(movie.id) === id);
  const indexOfMovieToUpdate = movies.indexOf(movieToUpdate);
  const newMovieInfo = { id, ...req.body };
  movies.splice(indexOfMovieToUpdate, 1, newMovieInfo);
  await writeFileJson(MOVIES_FILE_PATH, movies);

  res.status(200).json(newMovieInfo);
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readFileJson(MOVIES_FILE_PATH);
  const movieResult = movies.find(
    (movie) => Number(movie.id) === Number(id),
  );

  if (!movieResult) {
    return res.status(400).json({
      message: 'Não foi possível encontrar um filme com o ID informado.',
    });
  }

  res.status(200).json({ movieResult });
});

app.get('/movies', async (_req, res) => {
  const movies = await readFileJson(MOVIES_FILE_PATH);
  res.status(200).json({ movies });
});

app.post('/movies', async (req, res) => {
  const movies = await readFileJson(MOVIES_FILE_PATH);
  const newMovie = { id: movies.length + 1, ...req.body }; 
  movies.push(newMovie);
  await writeFileJson(MOVIES_FILE_PATH, movies);

  res.status(200).json(newMovie);
});

module.exports = app;