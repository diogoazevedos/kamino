/* eslint-disable global-require */

const user = {
  register: require('./user'),
  routes: { prefix: '/users' },
};

const card = {
  register: require('./card'),
  routes: { prefix: '/cards' },
};

module.exports = [
  user,
  card,
];
