const reverseString = function(inputedString) {
    let stringToArray = inputedString.split(''); 
    let outputString = [];

    stringToArray.forEach((item) => {
        outputString.unshift(item);
        console.log(outputString)
    })
    
    return outputString.join('');

};

// Do not edit below this line
module.exports = reverseString;
