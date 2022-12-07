const readline = require('readline-sync');
const { bodyMassIndex } = require('./bmi');

function main() {
    const weight = readline.questionFloat("What' your weight? ");
    const height = readline.questionFloat("What' your height? ");
    const result = bodyMassIndex(weight, height);
    console.log(result);
    if (result < 18.5) {
        console.log('Abaixo do peso')
    } else if (result >= 18.5 && result <= 24.9) {
        console.log('Peso normal');
    } else if (result >= 25 && result <= 29.9) {
        console.log('Acima do peso');
    } else if (result >= 30 && result <= 34.9) {
        console.log('Obesidade grau I');
    } else if (result >= 35 && result <= 39.9) {
        console.log('Obesidade grau II');
    } else {
        console.log('Obesidade graus III e IV');
    }
};

main();
