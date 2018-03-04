'use strict';

const Server = require('../server');
const timeService = require('../service/time');

describe('time controller', () => {
  /* afterAll(async (done) => {
    await Server.stop({ timeout: 10000 });
    console.log('hapi test server stopped');
    process.exit(0);
  }); */

  test('responds with success om request', async (done) => {
    const response = await Server.inject({
      method: 'GET',
      url: '/time'
    });
    expect(response.statusCode).toBe(200);
    expect(response.result).toBeInstanceOf(Object);
    done();
  });

  test('mocking controller', async (done) => {
    const returnValue = {'time': '0000-00-00000:00:00.0000'};

    const getTime = jest.fn();
    getTime.mockReturnValue(returnValue);
    timeService.getCurrentTime = getTime;

    const response = await Server.inject({
      method: 'GET',
      url: '/time'
    });

    expect(response.statusCode).toBe(200);
    expect(response.result).toBe(returnValue);
    done();
  });

  test('server stop', async (done) => {
    await Server.stop({ timeout: 10000 });
    done();
  });
});
