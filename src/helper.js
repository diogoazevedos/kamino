const { __, is, gt, length, compose, complement } = require('ramda');

const isString = is(String);
const isNotString = complement(isString);
const isTooLong = compose(gt(__, 255), length);

module.exports = {
  isString,
  isTooLong,
  isNotString,
};
