const { objOf, head, compose } = require('ramda');
const { assign } = require('./helpers');

class Repository {
  constructor() {
    this.table = 'users';
  }

  create(db, user) {
    return db(this.table)
      .insert(user.props)
      .then(compose(assign(user), objOf('id'), head));
  }
}

module.exports = Repository;
