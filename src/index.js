/* eslint-disable no-console */

require('dotenv').config();

const Hapi = require('hapi');
const knex = require('knex');
const kernel = require('./kernel');

const server = new Hapi.Server();

server.app.db = knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

server.connection({ port: process.env.PORT || 3000 });

server.register(kernel, (error) => {
  if (error) {
    throw error;
  }

  console.log('Kernel registered.');
});

module.exports = server;
