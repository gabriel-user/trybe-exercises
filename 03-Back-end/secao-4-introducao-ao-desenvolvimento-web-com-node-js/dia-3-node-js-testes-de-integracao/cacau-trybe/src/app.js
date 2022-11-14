const express = require('express');
const {
  getAllChocolates,
  getAllChocolatesByBrandId,
  getChocolateById,
  getAllChocolatesBySerchTerm,
  updateChocolate,
} = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await getAllChocolatesBySerchTerm(name);

  if (!chocolates) {
    return res.status(404).json({
      message: 'Não foi encontrando nenhum chocolate com o termo pesquisado',
    });
  }

  res.status(200).json(chocolates);
});

app.get('/chocolates/total', async (_req, res) => {
  const chocolates = await getAllChocolates();

  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates', async (_req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const id = Number(req.params.id);
  const chocolate = await getChocolateById(id);

  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });

  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await getAllChocolatesByBrandId(brandId);

  if (!chocolates) {
    res.status(404).json({ message: 'Não existe nenhum chocolate com essa marca' });
  }

  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await updateChocolate(id, req.body);

  if (!chocolate) {
    return res.status(404).json({ message: 'chocolate not found' });
  }

  res.status(200).json({ chocolate });
});

module.exports = app;
