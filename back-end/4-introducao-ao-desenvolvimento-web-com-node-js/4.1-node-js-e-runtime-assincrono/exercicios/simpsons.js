const fs = require('fs').promises;
const readline = require('readline-sync');

const read = async (file) => {
    const simpsonsData = await fs.readFile(`./${file}`, 'utf-8');
    const simpsonsList = JSON.parse(simpsonsData);
    return simpsonsList;
};

const getAllSimpsons = async () => {
    const simpsonsList = await read('simpsons.json');
    const simpsonsNames = simpsonsList.map(({ id, name }) => `${id} - ${name}`);
    simpsonsNames.forEach((name) => console.log(name));
}

const getSimpsonById = async (id) => {
    const simpsonsList = await read('simpsons.json');
    const simpson = simpsonsList.find((character) => +character.id === id);
    if (!simpson) {
        throw new Error('ID not found');
    }
    return simpson;
};

const removeSimpson = async () => {
    const simpsonsList = await read('simpsons.json');
    const newSimpsonsList = simpsonsList.filter(({ id }) => +id !== 10 && +id !== 6);
    await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsonsList));
}

const createSimpsonsFamily = async () => {
    const simpsonsList = await read('simpsons.json');
    const simpsonsFamily = simpsonsList.filter(({ id }) => +id >= 1 && +id <= 4);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
};

const addMember = async () => {
    const simpsonsList = await read('simpsonFamily.json');
    const newMember = {
        id: '5',
        name: 'Nelson Muntz'
    };
    const newSimpsonsList = [...simpsonsList, newMember];
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonsList));
};

async function main() {
    await getAllSimpsons();
    try {
        const simpson = await getSimpsonById(6);
        console.log(simpson);
    } catch (err) {
        console.error(err.message);
    };
    removeSimpson();
    createSimpsonsFamily();
    addMember();
}

main();