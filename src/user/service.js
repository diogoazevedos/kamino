const Boom = require('boom');
const User = require('./user');
const Repository = require('./repository');

class Service {
  constructor() {
    this.users = new Repository();
  }

  create(db, data) {
    try {
      const user = new User(data);

      return this.users.create(db, user);
    } catch (error) {
      return Boom.badData(error.message);
    }
  }
}

module.exports = Service;
