const reverseString = function(string) {
    arr=string.split("");
    arr.reverse();
    result = arr.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;