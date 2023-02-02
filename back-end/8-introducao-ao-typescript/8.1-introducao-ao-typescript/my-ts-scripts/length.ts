const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convert = (value: number, fromUnit: string, toUnit: string): number => {
    const fromUnitindex = units.indexOf(fromUnit);
    const toUnitindex = units.indexOf(toUnit);
    const exponent = toUnitindex - fromUnitindex;

    return value * Math.pow(10, exponent);
};

console.log(convert(1, 'km', 'cm'));
