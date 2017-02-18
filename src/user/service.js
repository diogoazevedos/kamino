const User = require('./user');
const Repository = require('./repository');

class Service {
  constructor() {
    this.users = new Repository();
  }

  create(db, data) {
    const user = new User(data);

    return this.users.create(db, user);
  }
}

module.exports = Service;
