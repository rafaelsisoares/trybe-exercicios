require('dotenv').config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

module.exports = {
  development: {
    username: MYSQL_USER || "root",
    password: MYSQL_PASSWORD || null,
    database: `${MYSQL_DATABASE}_development` || "database_development",
    host: MYSQL_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: MYSQL_USER || "root",
    password: MYSQL_PASSWORD || null,
    database: `${MYSQL_DATABASE}_test` || "database_test",
    host: MYSQL_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: MYSQL_USER || "root",
    password: MYSQL_PASSWORD || null,
    database: `${MYSQL_DATABASE}_production` || "database_production",
    host: MYSQL_HOST || "127.0.0.1",
    dialect: "mysql",
  },
};
