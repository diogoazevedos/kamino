const { gt, is, not, length } = require('ramda');

class User {
  constructor(props) {
    this.props = { };
    Object.assign(this, props);
  }

  set id(value) {
    if (not(is(Number, value))) {
      throw new TypeError('The id must be a number');
    }

    this.props.id = value;
  }

  get id() {
    return this.props.id;
  }

  set name(value) {
    if (not(is(String, value))) {
      throw new TypeError('The name must be a string');
    }

    if (gt(length(value), 255)) {
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
