const booksService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    let books;
       
    if (author) {
      books = await booksService.getByAuthor(author);
    } else {
      books = await booksService.getAll();
    };

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: `Ocorreu um erro: ${error.message}`});
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await booksService.getById(id);
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
    const newBook = await booksService.create({title, author, pageQuantity});

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
    
    const [bookUpdated]  = await booksService.update(id, { title, author, pageQuantity });
    if(!bookUpdated) return res.status(404).json({ message: 'Book not found!' });

    return res.status(200).json({ message: 'Book updated!' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: `Ocorreu um erro: ${error.message}`});
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const bookDeleted = await booksService.remove(id);
    if (!bookDeleted) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ meesage: 'Book deleted '});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: `Ocorreu um erro: ${error.message}`});
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}