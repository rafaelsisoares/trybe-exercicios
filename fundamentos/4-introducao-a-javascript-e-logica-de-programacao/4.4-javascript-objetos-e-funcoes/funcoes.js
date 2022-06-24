/* Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo.
As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. */

//1
const currentHour = 23;
let message;

if (currentHour > 4 && currentHour <= 11) {
    message = 'Hmmm, cheiro de café recém passado';
}else if (currentHour > 11 && currentHour <= 14) {
    message = 'Hora do almoço!!!';
}else if (currentHour > 14 && currentHour <= 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
}else if (currentHour > 18 && currentHour <= 22) {
    message = 'Rango da noite, vamos jantar :D';
}else if (currentHour > 22 || currentHour <= 4){
    message = 'Não deveríamos comer nada, é hora de dormir';
}
console.log(message);

//2
const base = 5;
let heigth = 8;
const area = base * heigth;
console.log(area);

const perimeter = (base * 2) + (heigth * 2);
console.log(perimeter);

//3
const nota = 90;

if (nota >= 80) {
    console.log('Parabéns, você foi aprovado(a)!');
}else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera.');
}else{
    console.log('Você foi reprovado(a).');
}

//4
const nota = 10;
let result;

if (nota >= 80) {
    result = 'aprovado';
}else if (nota < 80 && nota >= 60) {
    result = 'lista';
}else if (nota < 60 && nota >= 0){
    result = 'reprovado';
}

switch (result) {
    case 'aprovado':
        console.log('Parabéns, você foi aprovado(a)!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break;
    case 'reprovado':
        console.log('Você foi reprovado(a).');
        break;
    default:
        console.log('Não se aplica.');
        break;
}

//5
const myName = "Rafael";
const birthCity = "São Paulo";
let birthYear = 1996;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
console.log(birthYear);

birthCity = 'Maranello';
console.log(birthCity);