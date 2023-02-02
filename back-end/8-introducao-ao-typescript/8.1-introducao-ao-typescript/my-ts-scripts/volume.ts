const volumeUnits: string[] = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];

const convertVolume = (value: number, fromUnit: string, toUnit: string) => {
    const fromUnitIndex = volumeUnits.indexOf(fromUnit);
    const toUnitIndex = volumeUnits.indexOf(toUnit);
    const exponent = toUnitIndex - fromUnitIndex;

    return value * Math.pow(1000, exponent);
};