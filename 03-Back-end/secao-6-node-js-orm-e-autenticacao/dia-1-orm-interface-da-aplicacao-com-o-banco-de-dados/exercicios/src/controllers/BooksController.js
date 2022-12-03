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

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    console.log(title);
    const newBook = await BooksService.create({title, author, pageQuantity});

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: `Ocorreu um erro: ${error.message}`});
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    
    const [bookUpdated]  = await BooksService.update(id, { title, author, pageQuantity });
    if(bookUpdated === 0) return res.status(400).json({ message: 'Book not found!' });

    return res.status(200).json({ message: 'Book updated!' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: `Ocorreu um erro: ${error.message}`});
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update
}