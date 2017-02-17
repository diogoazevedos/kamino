const { is, not, head, curry, compose } = require('ramda');
const User = require('./user');

const find = curry((knex, id) => {
  if (not(is(Number, id))) {
    throw new TypeError('The id must be a number');
  }

  return knex('users')
    .where({ id })
    .then(compose(User.of, head));
});

const create = curry((knex, user) => {
  if (not(is(User, user))) {
    throw new TypeError('The user must be an user');
  }

  return knex('users')
    .insert(user.props)
    .then(compose(find(knex), head));
});

module.exports = {
  find,
  create,
};
