const { curryN } = require('ramda');

const assign = curryN(2, Object.assign);

module.exports = {
  assign,
};
