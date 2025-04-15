// lib/encoder.js
const { brailleDict } = require('./mapping');

function englishToBraille(text){
    let result='';
    let isNum=false;

    for(let char of text){
        if(char===' '){
            result+=brailleDict[' '];
            isNum=false;
        }
        else if(char.toUpperCase()!==char){
            result+=brailleDict[char];
        }else if(char>='0' && char<='9'){
            if (!isNum) {
                result += brailleDict['num'];  
                isNum = true;
            }
            result += brailleDict[char];
        }
        else{
            result+=brailleDict['cap'] + brailleDict[char.toLowerCase()];
        }
    }

    return result;
}

module.exports = { englishToBraille };