exports.register = (server, options, next) => {
  next();
};

exports.register.attributes = {
  name: 'user',
  dependencies: ['db'],
};
