"use strict";
const numberInput = 7;
const emailInput = 'test@test.com';
const numberList = [10, 5, 18, 2, 8, 23];
const peopleInput = {
    name: 'Rui',
    age: 23,
};
const ageInput = 15;
const itsAPrime = (param) => {
    for (let i = 2; i < param; i += 1) {
        if (param % i === 0) {
            return false;
        }
        ;
    }
    return param > 1;
};
itsAPrime(numberInput) ? console.log(`${numberInput} é primo`)
    : console.log(`${numberInput} não é primo`);
const validateEmailFormat = (param) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(param);
};
console.log(validateEmailFormat(emailInput));
const sortInput = (param) => {
    return param.sort((a, b) => a - b);
};
console.log(sortInput(numberList));
const createSimpleSentence = (param) => {
    return `Olá meu nome é ${param.name} e tenho ${param.age} anos.`;
};
console.log(createSimpleSentence(peopleInput));
const isLegalAge = (param) => {
    return !!param;
};
ageInput >= 18
    ? console.log(isLegalAge('true'))
    : console.log(isLegalAge(false));
