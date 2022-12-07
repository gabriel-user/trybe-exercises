const { User, Book } = require('../models');

const getUsersBooksById = async (userId) => {
  const userBooks = await User.findOne({
    where: { id: userId },
    include: [{ model: Book, as: 'books', through: { attributes: [] } }],
  });

  return userBooks;
};

module.exports = {
  getUsersBooksById,
};