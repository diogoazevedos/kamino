const { assign } = Object;
const { isNotNumber } = require('./validator');

class Entity {
  constructor(props) {
    this.props = {};
    assign(this, props);
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
}

module.exports = Entity;
