const removeFromArray = function(baseArray, ...theArgs) {
    console.log(baseArray);
    console.log(theArgs);
    baseArray = baseArray.filter((item) => !theArgs.includes(item));
    return baseArray;
    console.log(baseArray);
};

// Do not edit below this line
module.exports = removeFromArray;
