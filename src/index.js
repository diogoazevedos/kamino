/* eslint-disable no-console */

const plugins = require('./plugins');
const { Server } = require('hapi');

const server = new Server();

server.connection({ port: process.env.PORT || 1337 });

server.register(plugins, (error) => {
  if (error) {
    throw error;
  }

  console.log('Plugins successfully loaded.');
});

module.exports = server;
