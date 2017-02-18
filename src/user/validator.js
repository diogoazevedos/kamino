const { __, is, gt, length, compose, complement } = require('ramda');

const isString = is(String);
const isNumber = is(Number);

const isNotString = complement(isString);
const isNotNumber = complement(isNumber);

const isTooLong = compose(gt(__, 255), length);

module.exports = {
  isString,
  isNumber,
  isTooLong,
  isNotString,
  isNotNumber,
};
