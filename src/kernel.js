/* eslint-disable global-require */

module.exports = [
  {
    register: require('./product'),
    routes: { prefix: '/products' },
  },
  {
    register: require('./user'),
    routes: { prefix: '/users' },
  },
  {
    register: require('vision'),
  },
  {
    register: require('inert'),
  },
  {
    register: require('lout'),
  },
];
