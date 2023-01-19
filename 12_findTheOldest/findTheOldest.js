const findTheOldest = function(people = []) {
    const d = new Date();
    let currentYear = d.getFullYear();

     const oldest = people.reduce(function(a,b) {

        return (((a["yearOfDeath"] ?a["yearOfDeath"]: currentYear)-a["yearOfBirth"]) >
         ((b["yearOfDeath"] ? b["yearOfDeath"] : currentYear) -b["yearOfBirth"])) ? a : b;
     });

    return oldest;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people));
  console.table(findTheOldest(people));
  
// Do not edit below this line
module.exports = findTheOldest;
