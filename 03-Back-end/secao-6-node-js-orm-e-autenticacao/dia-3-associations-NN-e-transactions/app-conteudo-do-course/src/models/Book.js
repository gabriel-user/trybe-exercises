module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book',
   {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      releaseYear: DataTypes.INTEGER,
      totalPages: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
    },
  );

  return Book;
};