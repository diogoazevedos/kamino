/* eslint-disable no-console */

const server = require('./src');

server.start((error) => {
  if (error) {
    throw error;
  }

  console.log('Server running.');
});
