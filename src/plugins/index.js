/* eslint-disable global-require */

const user = {
  register: require('./user'),
  routes: { prefix: '/users' },
};

const product = {
  register: require('./product'),
  routes: { prefix: '/products' },
};

module.exports = [
  user,
  product,
];
