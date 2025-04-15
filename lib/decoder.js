// lib/decoder.js
const { brailleDict, reverseBrailleDict} = require('./mapping');
const { convertBrailleNumberToDigit } = require('./utils');

function brailleToEnglish(braille) {
    let result='';
    let isNum=false;
    let isCap=false;
    for(let i=0;i<braille.length;i+=6){
        const char = braille.slice(i, i + 6);
        if(char===brailleDict[' ']){
            result+=' ';
            isNum=false;
            isCap=false;
        }else if(char===brailleDict['cap']){
            isCap=true;
        }else if(char===brailleDict['num']){
            isNum=true;
        }else{
            let translatedChar = reverseBrailleDict[char];

            if (isNum) {
                translatedChar = convertBrailleNumberToDigit(translatedChar);
            }

            if (isCap) {
                translatedChar = translatedChar.toUpperCase();  
                isCap = false;  
            }

            result += translatedChar;
        }
        
    }
    
    return result; 
}

function isBraille(text) {
    return text.length % 6 === 0 && /^[O.]+$/.test(text);
}

module.exports = { brailleToEnglish, isBraille };

