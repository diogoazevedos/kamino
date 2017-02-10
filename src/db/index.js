/* eslint-disable global-require */

exports.register = (server, options, next) => {
  const knex = require('knex')(options);
  const bookshelf = require('bookshelf')(knex);

  server.expose('knex', knex);
  server.expose('bookshelf', bookshelf);

  next();
};

exports.register.attributes = {
  name: 'db',
};
