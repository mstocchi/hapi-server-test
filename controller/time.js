
const getCurrentTime = async (request, h) => {
  let d = new Date();
  return {time: d.toISOString()};
};

module.exports = {
  getTime: getCurrentTime
};
