const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr instanceof Array) {
    throw new Error;
  }
  const result = [];
  let previous = 0;
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        arr[i + 1] ? i += 1 : null;
      } else if (arr[i] === '--discard-prev') {
        if (arr[i - 2] !== '--discard-next') {
          arr[i - 1] ? result.pop() : null;
        }
      } else if (arr[i] === '--double-next') {
         arr[i + 1] ? result.push(arr[i + 1]) : null;
      } else if (arr[i] === '--double-prev') {
        if (arr[i - 2] !== '--discard-next') {
          arr[i - 1] ? result.push(arr[i - 1]) : null;
        }
      } else {
        result.push(arr[i]);
      }
  }
  return result;
};