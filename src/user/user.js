const { isTooLong, isNotString } = require('../../lib/validator');
const Model = require('../../lib/model');

class User extends Model {
  set name(value) {
    if (isNotString(value)) {
      throw new TypeError('The name must be a string');
    }

    if (isTooLong(value)) {
      throw new RangeError('The name may not be greater than 255 caracterers');
    }

    this.attributes.name = value;
  }

  get name() {
    return this.attributes.name;
  }
}

module.exports = User;
