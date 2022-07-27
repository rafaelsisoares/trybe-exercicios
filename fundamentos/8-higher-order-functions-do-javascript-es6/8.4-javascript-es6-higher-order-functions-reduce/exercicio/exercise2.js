const books = require('./base');

const reduceNames = (array) => {
    const allNames = array.reduce((allItems, item) => {
        return (item === array.length - 1) ? allItems + `${item.author.name}.` : allItems + `${item.author.name}, `;
    }, '');
    return allNames;
}

console.log(reduceNames(books));