const palindromes = function (s="") {
    s.replace(/\s/g,"");
    let arr = s.split("");
    let revArr = arr.reverse();
    if (arr === revArr) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
