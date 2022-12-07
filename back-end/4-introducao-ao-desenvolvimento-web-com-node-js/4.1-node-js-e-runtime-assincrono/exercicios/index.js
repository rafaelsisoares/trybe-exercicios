const readline = require('readline-sync');
const { bodyMassIndex } = require('./bmi');

function main() {
    const weight = readline.questionFloat("What' your weight? ");
    const height = readline.question("What' your height? ");
    console.log(bodyMassIndex(weight, height));
};

main();
