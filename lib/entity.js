const { assign } = Object;
const { isNotNumber } = require('./validator');

class Entity {
  constructor(attributes) {
    this.attributes = {};
    assign(this, attributes);
  }

  set id(value) {
    if (isNotNumber(value)) {
      throw new TypeError('The id must be a number');
    }

    this.attributes.id = value;
  }

  get id() {
    return this.attributes.id;
  }
}

module.exports = Entity;
