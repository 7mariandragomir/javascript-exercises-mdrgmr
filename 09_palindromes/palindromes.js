const palindromes = function (string) {
    let arr = string.replace(/[^a-zA-Z0-9]/g, '').split('');
    let reverseArr = arr.toReversed(); 

    if(arr.join('').toLowerCase() === reverseArr.join('').toLowerCase()) {
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
