const sumAll = function(start,end) {
    let total = 0;
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    } else {
        for (i = Math.min(start,end); i <= Math.max(start,end); i++) {
            total = total + i;
        }
    return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
