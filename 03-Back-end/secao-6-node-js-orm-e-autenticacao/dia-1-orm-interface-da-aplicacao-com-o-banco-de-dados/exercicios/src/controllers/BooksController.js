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

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await BooksService.getById(id);
    if(!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: `Ocorreu um erro: ${error.message}`});
  }
};

module.exports = {
  getAll,
  getById,
}