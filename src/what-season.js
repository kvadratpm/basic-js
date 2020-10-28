const CustomError = require("../extensions/custom-error");

const seasons = {
  0: 'winter',
  1: 'winter',
  2: 'spring',
  3: 'spring',
  4: 'spring',
  5: 'summer',
  6: 'summer',
  7: 'summer',
  8: 'autumn',
  9: 'autumn',
  10: 'autumn',
  11: 'winter',
};

module.exports = function getSeason(data = '') {
  if (data === '') {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(data) !== '[object Date]') {
    throw new Error();
  }
  return seasons[data.getMonth()];
};