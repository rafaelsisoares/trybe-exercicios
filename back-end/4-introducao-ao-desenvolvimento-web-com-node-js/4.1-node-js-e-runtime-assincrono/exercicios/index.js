const readline = require('readline-sync');
const { bodyMassIndex } = require('./bmi');

const BMI_MAX_AND_MIN = {
    'Underweight': {
        minBMI: 0,
        maxBMI: 18.4,
    },
    'Normal weight': {
        minBMI: 18.5,
        maxBMI: 24.9,
    },
    'Overweight': {
        minBMI: 25,
        maxBMI: 29.9,
    },
    'Obese class I': {
        minBMI: 30,
        maxBMI: 34.9,
    },
    'Obese class II': {
        minBMI: 35,
        maxBMI: 39.9,
    },
    'Obese class III': {
        minBMI: 40,
        maxBMI: 200,
    },
}

function main() {
    const weight = readline.questionFloat("What' your weight? ");
    const height = readline.questionFloat("What' your height? ");
    const result = bodyMassIndex(weight, height);
    console.log(result);
    /* if (result < 18.5) {
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
    } */

    const status = Object.keys(BMI_MAX_AND_MIN);
    const resultBMI = status.find((desc) => {
        const { minBMI, maxBMI } = BMI_MAX_AND_MIN[desc]
        return result >= minBMI && result <= maxBMI;
    });

    console.log(resultBMI);
};

main();
