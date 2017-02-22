const { head } = require('ramda');

class Repository {
  constructor(table, model) {
    this.table = table;
    this.model = model;
  }

  find(db, id) {
    return db(this.table)
      .where({ id })
      .then(head)
      .then(this.model.of);
  }

  create(db, model) {
    return db(this.table)
      .insert(model.attributes)
      .then(head)
      .then(id => this.find(db, id));
  }
}

module.exports = Repository;
