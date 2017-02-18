const { head } = require('ramda');

class Repository {
  constructor(table, Entity) {
    this.table = table;
    this.Entity = Entity;
  }

  find(db, id) {
    return db(this.table)
      .where({ id })
      .then(head)
      .then(this.Entity.of);
  }

  create(db, entity) {
    return db(this.table)
      .insert(entity.props)
      .then(head)
      .then(id => this.find(db, id));
  }
}

module.exports = Repository;
