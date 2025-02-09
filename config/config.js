require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_NAME || 'banco_todo_list',
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_NAME || 'banco_todo_list',
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_NAME || 'banco_todo_list',
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'mysql',
  },
};
