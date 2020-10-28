const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnSpeed) {
  return {
    turns: 2 ** diskNumber - 1 ,
    seconds: Math.floor((2 ** diskNumber - 1) / ((turnSpeed / 60) / 60)),
  }
};
