const sumAll = function(a, b) {
    let sum = 0;
    let smallerNum = Math.min(a,b);
    let biggerNum = Math.max(a,b); 

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return 'ERROR'
    } else {
        for (i = smallerNum; i <= biggerNum; i++) {
            sum += i;
        }
    }

    return sum;
};

sumAll(23, 3);

// Do not edit below this line
module.exports = sumAll;
