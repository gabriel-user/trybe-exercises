require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST || "127.0.0.1",
  dialect: "mysql"
};

module.exports = {
  development: {
    ...config,
    database: "books_database_development",
  },
  test: {
    ...config,
    database: "books_database_test",
 
  },
  production: {
    ...config,
    database: "books_database_production",
  }
};
