const { string, number } = require('joi');
const { create } = require('./repository');

exports.create = knex => ({
  description: 'Store a product in the database and return it',
  tags: ['api'],
  validate: {
    payload: {
      name: string().min(2).max(255).required(),
    },
  },
  response: {
    schema: {
      id: number().integer().required(),
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
