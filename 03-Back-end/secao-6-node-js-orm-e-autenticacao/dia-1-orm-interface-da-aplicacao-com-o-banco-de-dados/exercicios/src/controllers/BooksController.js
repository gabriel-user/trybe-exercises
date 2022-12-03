const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: `Ocorreu um erro: ${error.message}`});
  }
};

module.exports = {
  getAll,
}