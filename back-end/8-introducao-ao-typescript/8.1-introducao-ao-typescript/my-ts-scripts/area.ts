const readlineSync = require('readline-sync');

const areaUnits: string[] = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

const convertArea = (value: number, fromUnit: string, toUnit: string) => {
    const fromUnitIndex = areaUnits.indexOf(fromUnit);
    const toUnitIndex = areaUnits.indexOf(toUnit);
    const exponent = toUnitIndex - fromUnitIndex;

    return value * Math.pow(100, exponent);
};

const exec = () => {
    const inputValue = readlineSync.questionFloat('Digite o valor a ser convertido: \n');
    const targetFromUnit = readlineSync.keyInSelect(areaUnits, 'Escolha um número para a unidade base');
    const targetToUnit = readlineSync.keyInSelect(areaUnits, 'Escolha um número para a unidade de conversão');

    const fromUnit = areaUnits[targetFromUnit];
    const toUnit = areaUnits[targetToUnit];

    if (!fromUnit || !toUnit) {
        console.log('Função cancelada');
        return 0;
        
    }

    const result = convertArea(inputValue, fromUnit, toUnit);

    const output: string = `${value}${fromUnit} é igual a ${result}${toUnit}`;

    console.log(output);
};

exec();