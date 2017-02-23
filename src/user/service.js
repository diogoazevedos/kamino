const User = require('./user');
const UserRepository = require('./repository');

class UserService {
  constructor() {
    this.users = new UserRepository();
  }

  create(db, data) {
    const user = new User(data);

    return this.users.create(db, user);
  }
}

module.exports = UserService;
