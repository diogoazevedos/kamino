const { string } = require('joi');
const { create } = require('./repository');

exports.create = knex => ({
  validate: {
    payload: {
      name: string().min(2).max(255).required(),
    },
  },
  handler(request, reply) {
    create(knex, request.payload)
      .then((user) => {
        const response = reply(user.attributes);

        return response.code(201);
      });
  },
});
