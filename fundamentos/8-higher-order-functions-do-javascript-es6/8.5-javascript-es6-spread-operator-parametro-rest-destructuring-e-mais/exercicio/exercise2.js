const sum = (...values) => values.reduce((total, value) => total + value , 0);

console.log(sum(5, 4, 9, 10, 100, 9.5));