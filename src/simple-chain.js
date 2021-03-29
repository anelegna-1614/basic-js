const CustomError = require("../extensions/custom-error");
 let chain;
const chainMaker = {
   result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ((Number.isInteger(position) || Number.isNaN(this.result[position])) && position <= this.result.length){
      this.result.splice(position -1, 1);
      return this;
    } else {
      this.result = [];
      throw new Error;
    }  
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    chain = this.result;
    this.result = [];
    return chain.join('~~');
  }
};

module.exports = chainMaker;
