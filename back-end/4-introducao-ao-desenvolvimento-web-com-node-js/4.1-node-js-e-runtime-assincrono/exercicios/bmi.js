/* const weight = 73.8;
const height = 1.78; */

function bodyMassIndex(weight, height) {
    const result = weight / (height * height);
    return result.toFixed(2);
}

module.exports = {
    bodyMassIndex,
}