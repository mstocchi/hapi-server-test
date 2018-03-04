const getCurrentTimeInIsoFormat = () => {
  let d = new Date();
  return { time: d.toISOString() };
};

module.exports = {
  getCurrentTime: getCurrentTimeInIsoFormat
};
