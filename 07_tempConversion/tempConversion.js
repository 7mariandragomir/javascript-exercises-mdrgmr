const roundResult = function(num) {
  if(num === 0) {
    return num;
  } else {
    return Number(num.toFixed(1));
  }
}

const convertToCelsius = function(fh) {
  let celsius = (fh - 32) * 5/9;
  return roundResult(celsius);
};

const convertToFahrenheit = function(celsius) {
  let fh = (celsius * 9/5) + 32;
  return roundResult(fh);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
