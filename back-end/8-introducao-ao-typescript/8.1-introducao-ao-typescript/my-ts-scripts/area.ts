const areaUnits: string[] = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

const convertArea = (value: number, fromUnit: string, toUnit: string) => {
    const fromUnitIndex = areaUnits.indexOf(fromUnit);
    const toUnitIndex = areaUnits.indexOf(toUnit);
    const exponent = toUnitIndex - fromUnitIndex;

    return value * Math.pow(100, exponent);
};