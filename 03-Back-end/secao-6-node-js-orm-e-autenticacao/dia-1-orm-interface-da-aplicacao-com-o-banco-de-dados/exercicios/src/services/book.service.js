const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });
  return books;
};

const getById = async (bookId) => {
  const book = await Book.findByPk(bookId);
  return book;
};

const create = async ({ title, author, pageQuantity, publisher }) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });
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

const getByAuthor = async (author) => {
  const books = await Book.findAll({ 
    where: { author },
    order: [['title', 'ASC']]
  });

  return books;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};