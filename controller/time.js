const timeService = require('../service/time');

const getCurrentTime = async (request, h) => {
  return timeService.getCurrentTime();
};

module.exports = {
  getTime: getCurrentTime
};
