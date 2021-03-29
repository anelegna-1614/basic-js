const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  if(Array.isArray(arr)){
    for (i = 0; i <arr.length; i++ ){
    if(arr[i] === `--discard-next`){
      i = i+1;
    } else if(arr[i] === `--discard-prev`) {
      if(arr[i-2] !== `--discard-next` && i !== 0){
          newArr.pop();
      } 
    } else if(arr[i] === `--double-next`) {
      if(i< arr.length -2){
        newArr.push(arr[i+1]);
      }
    } else if(arr[i] === `--double-prev`){
      if(arr[i-2] !==  `--discard-next` && i !== 0){
        newArr.push(arr[i-1]);
    }} else {
      newArr.push(arr[i]);
    }
  }
  } else {
    throw new Error;
  }
  return newArr;
};
