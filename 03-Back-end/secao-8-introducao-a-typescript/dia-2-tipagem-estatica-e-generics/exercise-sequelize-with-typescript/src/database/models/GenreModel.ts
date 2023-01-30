import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Genre extends Model {
  declare id: number;
  declare genre: string;
};

Genre.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true,
    },
    genre: {
      type: STRING(45),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    modelName: 'genre',
    tableName: 'genres',
    sequelize: db
  },
);

export default Genre;