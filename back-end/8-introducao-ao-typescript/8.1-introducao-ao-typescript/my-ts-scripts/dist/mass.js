"use strict";
const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const convertMass = (value, fromUnit, toUnit) => {
    const fromUnitIndex = massUnits.indexOf(fromUnit);
    const toUnitIndex = massUnits.indexOf(toUnit);
    const exponent = toUnitIndex - fromUnitIndex;
    return value * Math.pow(10, exponent);
};
console.log(convertMass(1, 'dag', 'mg'));
