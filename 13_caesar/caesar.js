const caesar = function(s = "", n) {

    let cypher = "";
    for (let i=0; i < s.length; i++) {
        let ascii = s.charCodeAt(i);
        cond = (ascii >= 65 && ascii <= 90) ||  (ascii >= 97 && ascii <= 122);
        cypher += String.fromCharCode(cond ? ascii +n: ascii);  
    }
    return cypher;
};

console.log(caesar("ab cd",2));



// Do not edit below this line
module.exports = caesar;
