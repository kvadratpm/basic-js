const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.map((array) => array.map((elem) => {
    elem === '^^' ? count += 1 : count = count;
  }));
  return count;
};
