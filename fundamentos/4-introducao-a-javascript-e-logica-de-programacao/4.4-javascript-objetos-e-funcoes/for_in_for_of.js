let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let i in names) {
    console.log('Olá ' + names[i]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let j in car) {
    console.log(j + ': ' + car[j]);
}