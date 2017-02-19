const { isTooLong, isNotString } = require('../../lib/validator');
const Entity = require('../../lib/entity');

class User extends Entity {
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
