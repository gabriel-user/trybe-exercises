const express = require('express');
const { resolve } = require('path');
const { readFileJson, writeFileJson } = require('./utils/fsUtils');

const app = express();
app.use(express.json());

const MOVIES_FILE_PATH = resolve(__dirname, './movies.json');

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFileJson(MOVIES_FILE_PATH);
    
    if (q) {
      const filteredMovies = movies.filter(
        ({ movie }) => (movie.toLowerCase()).includes(q.toLowerCase()),
      );  
      res.status(200).json(filteredMovies);
    }
    
    res.status(500).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFileJson(MOVIES_FILE_PATH);
    const movieResult = movies.find((movie) => Number(movie.id) === Number(id));

    if (!movieResult) {
      res.status(400).json({
        message: 'Não foi encontrado nenhum filme com o ID informado', 
      });
    }

    res.status(200).json(movieResult);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies', async (_req, res) => {
  try {
    const movies = await readFileJson(MOVIES_FILE_PATH);
    res.status(200).json({ movies });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await readFileJson(MOVIES_FILE_PATH);
    const newMovie = { id: movies.length + 1, ...req.body };
    movies.push(newMovie);
    await writeFileJson(MOVIES_FILE_PATH, movies);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const movies = await (readFileJson(MOVIES_FILE_PATH));
    const index = movies.findIndex((movie) => Number(movie.id) === id);
    movies[index] = { id, ...req.body };
    await writeFileJson(MOVIES_FILE_PATH, movies);
    res.status(200).json(movies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFileJson(MOVIES_FILE_PATH);
    const newMoviesArray = movies.filter((movie) => Number(movie.id) !== Number(id));
    await writeFileJson(MOVIES_FILE_PATH, newMoviesArray);
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;