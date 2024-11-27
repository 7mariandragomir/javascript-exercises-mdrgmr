const fibonacci = function(n) {
    let fibSeq = [1, 1];
    let num = Number(n);

    if(Math.sign(num) === -1) {return "OOPS"};
    if(num === 0) {return 0}

    

    for(let i = 2; i < num; i++) {
        item = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length-2]
        fibSeq.push(item);
    }
    
    console.log(fibSeq[fibSeq.length-1]);
    return fibSeq[fibSeq.length-1];
};

fibonacci(0);

// Do not edit below this line
module.exports = fibonacci;
