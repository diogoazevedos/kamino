const { __, is, gt, length, compose, complement } = require('ramda');
const { isMoment } = require('moment');

const isString = is(String);
const isNumber = is(Number);

const isNotString = complement(isString);
const isNotNumber = complement(isNumber);
const isNotMoment = complement(isMoment);

const isTooLong = compose(gt(__, 255), length);

module.exports = {
  isString,
  isNumber,
  isMoment,
  isTooLong,
  isNotString,
  isNotNumber,
  isNotMoment,
};
