import sequelize from 'sequelize';
import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.title')), 'totalBooks'],
    ],
    group: 'authors.name',
    raw: true,
  });

  console.log(data);
  process.exit(0);
})();