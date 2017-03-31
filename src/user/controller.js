const Boom = require('boom');

class UserController {
  constructor(db, users) {
    this.db = db;
    this.users = users;
  }

  async create(request, reply) {
    try {
      const user = await this.users.create(this.db, request.payload);

      return reply(user.attributes).code(201);
    } catch (error) {
      return Boom.badData(error.message);
    }
  }
}

module.exports = UserController;
