const books = require('./base');

function averageAge(array) {
    const average = array.reduce((ages, item) => {
        ages += (item.releaseYear - item.author.birthYear) / array.length;
        return ages;
    }, 0)
    return parseFloat(average).toPrecision(2);
}

console.log(averageAge(books));