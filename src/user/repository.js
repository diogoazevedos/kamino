const User = require('./user');
const BaseRepository = require('../../lib/repository');

class Repository extends BaseRepository {
  constructor() {
    super('users', User);
  }
}

module.exports = Repository;
