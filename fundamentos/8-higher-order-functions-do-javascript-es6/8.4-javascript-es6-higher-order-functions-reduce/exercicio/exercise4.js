const books = require('./base');

const longestNamedBook = (array) => {
    const selectedName = array.reduce((longest, actual) => {
        return (longest['name'].length > actual['name'].length) ? longest : actual;
    },);
    return selectedName;
}

console.log(longestNamedBook(books));