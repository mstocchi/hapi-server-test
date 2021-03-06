const controller = require('../controller/time');

module.exports = [
  {
    method: 'GET',
    path: '/time',
    options: {
      handler: controller.getTime,
      description: 'Return current time on server',
      notes: 'Return in date time format',
      tags: ['api']
    }
  }
];
