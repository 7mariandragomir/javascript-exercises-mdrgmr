const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if (!Array.isArray(arr)) {
    console.log("Please use an array, [a, b, c]");
  }

  let result; 

  result = arr.reduce((previous, next) =>{
    return previous + next;
  }, 0);

  return result;
};

const multiply = function(arr) {
  if (!Array.isArray(arr)) {
    console.log("Please use an array, [a, b, c]");
  }
  let result;

  result = arr.reduce((previous, next) =>{
    return previous * next;
  })

  return result;
};

const power = function(base, exponent) { //I should have used Math.pow
  let arr = [];
  let result; 

  for(let i = 0; i < exponent; i++) {
    arr.push(base);
    console.log(arr);
  };

  result = arr.reduce((prev, next) =>{
    return prev * next;
  });

  return result;
};

const factorial = function(f) {
	let result; 
  let arr = []; 
  let num = f;

  for (let i = 0; i < f; i++) {
    arr.push(num);
    num = num - 1;
  }

  result = arr.reduce((prev, next) => {
    return prev * next;
  }, 1);

  return result;
};

// const factorial = function (n) {
//   if (n === 0) return 1;
//   let product = 1;
//   for (let i = n; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// };


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
