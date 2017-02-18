const { prop } = require('ramda');
const Boom = require('boom');

class Controller {
  constructor(db, users) {
    this.db = db;
    this.users = users;
  }

  create(request, reply) {
    try {
      const result = this.users
        .create(this.db, request.payload)
        .then(prop('props'));

      return reply(result).code(201);
    } catch (error) {
      return Boom.badData(error.message);
    }
  }
}

module.exports = Controller;
