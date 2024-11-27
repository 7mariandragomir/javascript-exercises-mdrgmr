const palindromes = function (string) {
    let cleanArray = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
    let reversedArray = cleanArray.toReversed(); 

    if(cleanArray.join('') === reversedArray.join('')) {
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
