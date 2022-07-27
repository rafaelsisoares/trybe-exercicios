const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
console.log(sum(4, 7, 8, 9, 60, 49, 17, 3, 5, 100)); //262