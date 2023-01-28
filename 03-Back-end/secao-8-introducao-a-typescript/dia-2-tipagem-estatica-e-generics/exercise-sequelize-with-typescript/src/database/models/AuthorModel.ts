import { Model, INTEGER, STRING } from "sequelize";
import db from ".";

class Author extends Model {
  declare id: number;
  declare name: string;
}

Author.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "author",
    tableName: "authors",
  }
);

export default Author;