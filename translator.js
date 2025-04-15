// translator.js
const { englishToBraille } = require('./lib/encoder');
const { brailleToEnglish, isBraille } = require('./lib/decoder');

const input = process.argv.slice(2).join(' ');  

if (isBraille(input)) {
    console.log(brailleToEnglish(input));
} else {
    console.log(englishToBraille(input));
}

