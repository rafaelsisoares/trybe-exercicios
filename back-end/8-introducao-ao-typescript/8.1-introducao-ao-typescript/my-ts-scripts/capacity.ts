const capacityUnits: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convertCapacity = (value: number, fromUnit: string, toUnit: string): number => {
    const fromUnitIndex = capacityUnits.indexOf(fromUnit);
    const toUnitIndex = capacityUnits.indexOf(toUnit);
    const exponent = toUnitIndex - fromUnitIndex;

    return value * Math.pow(10, exponent);
};

console.log(convertCapacity(100, 'ml', 'l'));
