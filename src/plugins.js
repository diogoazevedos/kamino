/* eslint-disable global-require */

require('dotenv').config();

module.exports = [
  {
    register: require('./product'),
    routes: {
      prefix: '/products',
    },
  },
  {
    register: require('./user'),
    routes: {
      prefix: '/users',
    },
  },
  {
    register: require('./db'),
    options: {
      client: process.env.DB_CLIENT,
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      },
    },
  },
];
