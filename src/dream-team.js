const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
    return arr
    .map((elem) => typeof elem === 'string' ? elem.trim().slice(0, 1).toUpperCase() : '').sort().join('');
  } else {
    return false;
  }
};
