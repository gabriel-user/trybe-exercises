import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import Author from './AuthorModel';
import Genre from './GenreModel';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
};

Book.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: STRING(250),
      allowNull: false,
    },
    authorId: {
      type: INTEGER,
      allowNull: false,
    },
    genreId: {
      type: INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
    modelName: 'book',
    tableName: 'books',
    sequelize: db,
  },
);

Book.belongsTo(Author);
Author.hasMany(Book);

Book.belongsTo(Genre);
Genre.hasMany(Book);


