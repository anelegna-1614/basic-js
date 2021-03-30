const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(msg, key) {
    if (!msg || !key) {
      throw new Error();
    }
    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedMsg = '';

    msg = msg.toUpperCase().split('');
    key = key.toUpperCase();

    for (let i=0; i <msg.length; i++) {

      let msgI = a.indexOf(msg[i]);
      let keyI = a.indexOf(key[((i >= key.length) ? i% key.length : i)]);

      if (a.includes(msg[i])) {
        encryptedMsg += a[((a.length + (msgI + keyI)) % a.length)]
      } else {
        encryptedMsg += msg.splice(i, 1);
        i--;
      }
    }
    return (this.mode === false) ? encryptedMsg.split('').reverse().join('') : encryptedMsg;
  }   

  decrypt(encryptedMsg, key) {
    if (!encryptedMsg || !key){
      throw new Error();
    }
    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let msg = '';

    encryptedMsg =encryptedMsg.toUpperCase().split('');
    key = key.toUpperCase();

    for (let i=0; i < encryptedMsg.length; i++) {

      let encryptedMsgI = a.indexOf(encryptedMsg[i]);
      let keyI = a.indexOf(key[((i >= key.length) ? i% key.length : i)]);

      if (a.includes(encryptedMsg[i])) {
        msg += a[((a.length + (encryptedMsgI + keyI)) % a.length)]
      } else {
        msg += encryptedMsg.splice(i, 1);
        i--;
      }
  }
  return (this.mode === false) ? msg.split('').reverse().join('') : msg;
}
}

module.exports = VigenereCipheringMachine;
