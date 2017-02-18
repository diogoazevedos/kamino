const { prop } = require('ramda');

class Controller {
  constructor(db, users) {
    this.db = db;
    this.users = users;
  }

  create(request, reply) {
    const result = this.users
      .create(this.db, request.payload)
      .then(prop('props'));

    return reply(result).code(201);
  }
}

module.exports = Controller;
