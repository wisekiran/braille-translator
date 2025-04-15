// lib/utils.js
function convertBrailleNumberToDigit(letter) {
    const numberMapping = {
      'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5',
      'f': '6', 'g': '7', 'h': '8', 'i': '9', 'j': '0'
    };
    return numberMapping[letter] || letter;
}
  
module.exports = { convertBrailleNumberToDigit };