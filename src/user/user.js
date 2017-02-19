const { isTooLong, isNotString, isNotNumber } = require('../../lib/validator');

class User {
  constructor(props) {
    this.props = { };
    Object.assign(this, props);
  }

  set id(value) {
    if (isNotNumber(value)) {
      throw new TypeError('The id must be a number');
    }

    this.props.id = value;
  }

  get id() {
    return this.props.id;
  }

  set name(value) {
    if (isNotString(value)) {
      throw new TypeError('The name must be a string');
    }

    if (isTooLong(value)) {
      throw new RangeError('The name may not be greater than 255 caracterers');
    }

    this.props.name = value;
  }

  get name() {
    return this.props.name;
  }

  static of(props) {
    return new User(props);
  }
}

module.exports = User;
