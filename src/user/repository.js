const User = require('./user');
const { Repository } = require('alderaan');

class UserRepository extends Repository {
  constructor() {
    super('users', User);
  }
}

module.exports = UserRepository;
