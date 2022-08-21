const ftoc = function(temperatureF) {
  let temperatureC = Math.round(((temperatureF - 32) * 5/9) * 10) / 10;
  console.log(temperatureC);
  return temperatureC;
};

const ctof = function(temperatureC) {
  let temperatureF = Math.round((temperatureC * 1.8 + 32) * 10) / 10;
  console.log(temperatureF);
  return temperatureF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
