const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convertLength = (value: number, fromUnit: string, toUnit: string): number => {
    const fromUnitindex = units.indexOf(fromUnit);
    const toUnitindex = units.indexOf(toUnit);
    const exponent = toUnitindex - fromUnitindex;

    return value * Math.pow(10, exponent);
};

console.log(convertLength(1, 'km', 'cm'));
