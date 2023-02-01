const numberInput = 7;

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