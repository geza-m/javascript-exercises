// const title = require("../generator-exercise/generators/app/templates/title");

const getTheTitles = function(books) {
    let titles = [];
    for (let book of books) {
        titles.push(book["title"]);
    } 
    return titles;
};

const bs = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log( getTheTitles(bs));

// Do not edit below this line
module.exports = getTheTitles;
