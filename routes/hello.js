module.exports = [
  {
    method: 'GET',
    path: '/hello',
    options: {
      handler: function (request, h) {
        return 'Hello World!';
      },
      description: 'Hello Message Endpoint',
      notes: 'Returns a Hello World Message',
      tags: ['api']
    }
  }
];
