'use strict'

var Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Pack = require('./package')

const main = async () => {
  console.log('Starting server...')

  const server = new Hapi.Server({
    host: '0.0.0.0',
    port: 3000
  })

  console.log('Registering plugins...')
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
    ])

  try {
    await server.start()
    console.log('Server is running at ' + server.info.uri)
  } catch (error) {
    console.log(error)
  }
}

main()
