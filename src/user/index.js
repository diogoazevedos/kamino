const Joi = require('joi');
const UserService = require('./service');
const UserController = require('./controller');

exports.register = (server, options, next) => {
  const service = new UserService();
  const controller = new UserController(server.app.db, service);

  server.expose('service', service);

  server.route([
    {
      path: '/',
      method: 'POST',
      handler: controller.create.bind(controller),
      config: {
        description: 'Store an user in the database and return it',
        validate: {
          payload: {
            name: Joi.string().min(2).max(255).required(),
          },
        },
        response: {
          schema: {
            id: Joi.number().integer().required(),
            name: Joi.string().min(2).max(255).required(),
          },
        },
      },
    },
  ]);

  next();
};

exports.register.attributes = {
  name: 'user',
};
