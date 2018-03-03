'use strict'

var Hapi = require('hapi')

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 3000
})

server.route({
  method: 'GET',
  path: '/test',
  handler: function (request, h) {
    return 'reply from test'
  }
})

const main = async () => {
  try {
    await server.start()
    console.log('Server is running at ' + server.info.uri)
  } catch (error) {
    console.log(error)
  }
}

main()
