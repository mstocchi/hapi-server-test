'use strict';

var Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Pack = require('./package');

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 3000
});

const main = async () => {
  console.log('Starting server...');

  console.log('Registering plugins...');
  await server.register(
    [
      Inert,
      Vision,
      {
        plugin: require('hapi-swagger'),
        option: {
          info: {
            title: 'Test API Documentation',
            version: Pack.version
          }
        }
      },
      require('./routes')
    ]);

  try {
    await server.start();
    console.log('Server is running at ' + server.info.uri);
  } catch (error) {
    console.log(error);
  }
};

process.on('SIGINT', function () {
  console.log('stopping hapi server');

  server.stop({ timeout: 10000 }).then(function (err) {
    console.log('hapi server stopped');
    process.exit((err) ? 1 : 0);
  });
});

main();

module.exports = server;
