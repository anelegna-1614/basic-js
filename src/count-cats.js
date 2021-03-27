const CustomError = require("../extensions/custom-error");

module.exports = function countCats(catArray) {
  count = 0
  catArray.forEach(element => {
    element.forEach(el => {
      if (el === '^^'){
        count = count + 1;
      }     
    });
  }); 
  return count;
};
