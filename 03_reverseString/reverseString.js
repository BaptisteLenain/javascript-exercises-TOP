const reverseString = function(words) {
    let myArray = words.split("");
    let myLetter = '';

    for (i = 0; i < myArray.length; i++) {
        myLetter = myArray.shift();
        myArray.splice(myArray.length - i, 0, myLetter);
        myLetter = '';
    }
    console.log(myArray);
    words = myArray.join('');
    return words;
};

// Do not edit below this line
module.exports = reverseString;
