const fs = require('fs').promises;

const read = async () => {
    const simpsonsData = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsonsList = JSON.parse(simpsonsData);
    const simpsonsNames = simpsonsList.map(({ id, name }) => `${id} - ${name}`);
    simpsonsNames.forEach((name) => console.log(name));
};

async function main() {
    await read();
}

main();