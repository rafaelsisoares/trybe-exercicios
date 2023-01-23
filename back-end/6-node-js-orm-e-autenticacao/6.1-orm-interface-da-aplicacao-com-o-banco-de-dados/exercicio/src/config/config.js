require('dotenv').config();

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_HOST } = process.env;

module.exports = {
  development: {
    username: MYSQL_USER || "root",
    password: MYSQL_PASSWORD || "root",
    database: `${MYSQL_DATABASE}-dev` || 'database',
    host: MYSQL_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: MYSQL_USER || "root",
    password: MYSQL_PASSWORD || "root",
    database: `${MYSQL_DATABASE}-test` || 'database',
    host: MYSQL_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: MYSQL_USER || "root",
    password: MYSQL_PASSWORD || "root",
    database: `${MYSQL_DATABASE}-production` || 'database',
    host: MYSQL_HOST || "127.0.0.1",
    dialect: "mysql",
  },
};
