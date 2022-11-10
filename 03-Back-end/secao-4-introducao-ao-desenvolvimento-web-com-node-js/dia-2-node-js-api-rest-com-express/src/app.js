const express = require('express');
const { resolve } = require('path');
const { readFileJson } = require('./utils/fsUtils');

const app = express();
app.use(express.json());

const MOVIES_FILE_PATH = resolve(__dirname, './movies.json');

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

module.exports = app;