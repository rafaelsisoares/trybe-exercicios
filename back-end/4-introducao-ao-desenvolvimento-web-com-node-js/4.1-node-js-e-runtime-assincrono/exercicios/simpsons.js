const fs = require('fs').promises;
const readline = require('readline-sync');

const read = async () => {
    const simpsonsData = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsonsList = JSON.parse(simpsonsData);
    return simpsonsList;
};

const getAllSimpsons = async () => {
    const simpsonsList = await read();
    const simpsonsNames = simpsonsList.map(({ id, name }) => `${id} - ${name}`);
    simpsonsNames.forEach((name) => console.log(name));
}

const getSimpsonById = async (id) => {
    const simpsonsList = await read();
    const simpson = simpsonsList.find((character) => +character.id === id);
    if (!simpson) {
        throw new Error('ID not found');
    }
    return simpson;
};

const removeSimpson = async () => {
    const simpsonsList = await read();
    const newSimpsonsList = simpsonsList.filter(({ id }) => +id !== 10 && +id !== 6);
    await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsonsList));
}

async function main() {
    await getAllSimpsons();
    try {
        const simpson = await getSimpsonById(6);
        console.log(simpson);
    } catch (err) {
        console.error(err.message);
    };
    removeSimpson();
}

main();