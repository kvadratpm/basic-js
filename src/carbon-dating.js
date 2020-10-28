const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(stringActivity) {
  const numberActivity = parseFloat(stringActivity);
  if (Number.isNaN(numberActivity) || typeof stringActivity != 'string' || numberActivity < 1 || numberActivity > 15) {
    return false;
  }
  const k = 0.693/HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log2(MODERN_ACTIVITY/numberActivity) / k);
  return t;
};
