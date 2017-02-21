const { assign } = Object;
const { utc } = require('moment');
const { ISO8601 } = require('./constants');
const { isNotNumber, isNotMoment } = require('./validator');

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

  set createdAt(value) {
    if (isNotMoment(value)) {
      throw new TypeError('The createdAt must be an instance of moment');
    }

    this.attributes.created_at = value.format(ISO8601);
  }

  get createdAt() {
    return utc(this.attributes.created_at, ISO8601);
  }

  set updatedAt(value) {
    if (isNotMoment(value)) {
      throw new TypeError('The updatedAt must be an instance of moment');
    }

    this.attributes.updated_at = value.format(ISO8601);
  }

  get updatedAt() {
    return utc(this.attributes.updated_at, ISO8601);
  }

  static of(attributes) {
    const entity = new this();
    entity.attributes = attributes;

    return entity;
  }
}

module.exports = Entity;
