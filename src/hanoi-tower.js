const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj= {};
  let turns = 2**disksNumber - 1;
  let seconds = Math.floor(turns * 3600 /turnsSpeed);

obj.turns = turns;
obj.seconds = seconds;
return obj;
};
