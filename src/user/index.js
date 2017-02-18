const Joi = require('joi');
const Service = require('./service');
const Controller = require('./controller');

exports.register = (server, options, next) => {
  const service = new Service();
  const controller = new Controller(server.app.db, service);

  server.expose('service', service);

  server.route([
    {
      path: '/',
      method: 'POST',
      handler: controller.create.bind(controller),
      config: {
        description: 'Store a product in the database and return it',
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
