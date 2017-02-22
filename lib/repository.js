const { Maybe } = require('ramda-fantasy');
const { bind, head, compose } = require('ramda');

class Repository {
  /**
   * Create a new repository instance.
   *
   * @param  {String} table
   * @param  {Model}  model
   * @return {Void}
   */
  constructor(table, model) {
    this.table = table;
    this.model = model;
    this.factory = bind(model.of, model);
  }

  /**
   * Find the specific model.
   *
   * @param  {Knex}   db
   * @param  {Number} id
   * @return {Promise<Maybe>}
   */
  find(db, id) {
    return db(this.table)
      .where({ id })
      .then(compose(Maybe, head))
      .then(maybe => maybe.map(this.factory));
  }

  /**
   * Store the model in storage.
   *
   * @param  {Knex}  db
   * @param  {Model} model
   * @return {Promise<Model>}
   */
  create(db, model) {
    return db(this.table)
      .insert(model.attributes)
      .then(head)
      .then(id => this.find(db, id))
      .then(maybe => maybe.getOrElse());
  }
}

module.exports = Repository;
