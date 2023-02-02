"use strict";
const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const convertCapacity = (value, fromUnit, toUnit) => {
    const fromUnitIndex = capacityUnits.indexOf(fromUnit);
    const toUnitIndex = capacityUnits.indexOf(toUnit);
    const exponent = toUnitIndex - fromUnitIndex;
    return value * Math.pow(10, exponent);
};
console.log(convertCapacity(100, 'ml', 'l'));
