"use strict";
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const convert = (value, fromUnit, toUnit) => {
    const fromUnitindex = units.indexOf(fromUnit);
    const toUnitindex = units.indexOf(toUnit);
    const exponent = toUnitindex - fromUnitindex;
    return value * Math.pow(10, exponent);
};
console.log(convert(1, 'km', 'cm'));
