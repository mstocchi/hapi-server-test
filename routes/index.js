const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

exports.plugin = {
  register: (server, options) => {
    console.log('Setting routes...');
    const routes = fs.readdirSync(__dirname)
      .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename);
      })
      .map((file) => {
        return require(path.join(__dirname, file));
      });

    for (var route in routes) {
      let routeObject = routes[route];
      server.route(routeObject);
    }
  },
  name: 'routesPlugin',
  version: '0.1'
};
