const express = require('express');
const { getAllChocolates } = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (_req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;