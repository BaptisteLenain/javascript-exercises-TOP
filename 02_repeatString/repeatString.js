let addString = '';

const repeatString = function(string, num) {
    addString = ''
    if (num < 0) {
        return 'ERROR';
    } else { 
        for (i = 1; i <= num; i++) {
        addString += string;
       // console.log(addString);
        }
    return addString;
    }
};

// Do not edit below this line
module.exports = repeatString;
