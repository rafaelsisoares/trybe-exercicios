const readLine = require('readline-sync');

const name = readLine.question('Qual é o seu nome? ');
const age = readLine.questionInt('Quantos anos você tem? ');

// console.log('Hello World!');

console.log(`Olá, ${name}! Você tem ${age} anos.`);