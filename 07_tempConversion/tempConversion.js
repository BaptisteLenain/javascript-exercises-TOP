const ftoc = function(temperatureF) {
  return Math.round(((temperatureF - 32) * 5/9) * 10) / 10;
};

const ctof = function(temperatureC) {
  return Math.round((temperatureC * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
