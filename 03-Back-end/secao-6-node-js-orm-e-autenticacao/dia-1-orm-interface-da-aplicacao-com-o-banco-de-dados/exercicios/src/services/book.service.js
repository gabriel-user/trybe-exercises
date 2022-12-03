const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (bookId) => {
  const book = await Book.findByPk(bookId);
  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const update = async (bookId, bookUpdates) => {
  const bookUpdated = await Book.update(bookUpdates, {
    where: {
      id: bookId,
    }
  });

  return bookUpdated;
};

const remove = async (bookId) => {
  const bookDeleted = await Book.destroy({ 
    where: {
      id: bookId,
    }
  });

  return bookDeleted;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};