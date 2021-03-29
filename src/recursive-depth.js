const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  max = 0 ;
  count = 0 ;
 calculateDepth(arr) {
  
  arr.forEach( (elem) => {
    if (Array.isArray(elem)) {
      if (this.count < this.max) {
        this.count = this.count + 1;
        return this;
        this.calculateDepth(elem);
      } else {
        this.max = this.max +1;
        return this;
        this.calculateDepth(elem);
      }
    } else {
      this.count = 1;
      return;
    }
  });
return this.max +1;
}}