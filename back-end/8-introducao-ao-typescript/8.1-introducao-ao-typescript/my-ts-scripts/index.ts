const numberInput = 7;
const emailInput = 'test@test.com';
const numberList = [10, 5, 18, 2, 8, 23];
interface Person {
    name: string;
    age: number;
}

const peopleInput = {
    name: 'Rui',
    age: 23,
};

const ageInput = 15;

const itsAPrime = (param: number): boolean => {
    for (let i = 2; i < param; i += 1) {
        if (param % i === 0) {
            return false;
        };
    }

    return param > 1;
}

itsAPrime(numberInput) ? console.log(`${numberInput} é primo`)
: console.log(`${numberInput} não é primo`);



const validateEmailFormat = (param: string): boolean => {
    let re: RegExp = /\S+@\S+\.\S+/;
    return re.test(param);
};

console.log(validateEmailFormat(emailInput));

const sortInput = (param: number[]): number[] => {
    return param.sort((a, b) => a - b);
}

console.log(sortInput(numberList));


const createSimpleSentence = (param: Person): string => {
    return `Olá meu nome é ${param.name} e tenho ${param.age} anos.`;
};

console.log(createSimpleSentence(peopleInput));


const isLegalAge = (param: string | boolean): boolean => {
    return !!param;
};

ageInput >= 18
? console.log(isLegalAge('true'))
: console.log(isLegalAge(false));