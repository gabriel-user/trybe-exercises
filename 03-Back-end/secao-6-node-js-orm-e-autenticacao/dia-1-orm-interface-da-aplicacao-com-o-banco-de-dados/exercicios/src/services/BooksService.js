const { Book } = require('../models/');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async(bookId) => {
  const book = await Book.findByPk(bookId);
  return book;
};

module.exports = {
  getAll,
  getById,
};