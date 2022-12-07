module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
   {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER
    },
    {
      timestamps: false,
      underscored: true,
    },
  );

  return User;
};