class User {
  constructor(attributes) {
    this.attributes = attributes;
  }

  static of(attributes) {
    return new User(attributes);
  }
}

module.exports = User;
