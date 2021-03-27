const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if(typeof(sampleActivity) !== "string" || isNaN(sampleActivity) || +sampleActivity <= 0) {
      return false;
  }
  sampleActivity = +sampleActivity;
 t = (((Math.log1p((MODERN_ACTIVITY / sampleActivity)-1)) * HALF_LIFE_PERIOD) /   Math.LN2 ) ;
 if (t <= 0) {
  return false;
}
   return Math.ceil(t);
};
