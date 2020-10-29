const CustomError = require("../extensions/custom-error");
module.exports = function repeater (str, obj) {
  let acc = '';
  const defObj = {repeatTimes: 1, separator: '+', additionRepeatTimes: 0, additionSeparator: '|' };
  Object.keys(defObj).forEach((elem) => {
    obj.hasOwnProperty(elem) && obj[elem] ? null : obj[elem] = defObj[elem];
  });
  if (obj.repeatTimes) {
    for (let i = 0; i < obj.repeatTimes; i++) {
      acc += str;
      if (obj.additionRepeatTimes > 0) {
        console.log(acc)
        for (let j = 0; j < obj.additionRepeatTimes; j++) {
          acc += obj.addition;
          j === obj.additionRepeatTimes - 1 ? null : acc += obj.additionSeparator;
        }
      } else if (obj.additionRepeatTimes === 0 && obj.addition){
        acc += obj.addition;
      }
      i === obj.repeatTimes - 1 ? null : acc += obj.separator;
    }
  }
  return acc;
};
//repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

//'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
  