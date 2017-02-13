const { create } = require('./service');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'POST',
      path: '/',
      config: create(server.app.knex),
    },
  ]);

  next();
};

exports.register.attributes = {
  name: 'user',
};
