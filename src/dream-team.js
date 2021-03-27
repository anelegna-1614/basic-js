const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  dreamTeam= [];
  if (Array.isArray(members)) {
  members.forEach(member => {
    if (typeof member === "string"){
    dreamTeam.push(member.toUpperCase().trim()[0]);
    }
  })
  return dreamTeam.sort().join('');
  } return false;
};
