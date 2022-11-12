const express = require('express');
const { getAllChocolates } = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (_req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const id = Number(req.params.id);
  const chocolates = await getAllChocolates();
  const chocolate = chocolates.find((choc) => Number(choc.id) === id);

  res.status(200).json({ chocolate });
});

module.exports = app;