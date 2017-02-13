const { merge } = require('ramda');
const User = require('./user');

exports.create = (knex, data) => (
  knex('users')
    .insert(data)
    .then((result) => {
      const attributes = merge(data, { id: result[0] });

      return User.of(attributes);
    })
);
