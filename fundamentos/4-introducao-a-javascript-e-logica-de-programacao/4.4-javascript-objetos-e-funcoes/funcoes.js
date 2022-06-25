/* Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo.
As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. */
const currentHour = 10;
const base = 5;
let heigth = 8;
const nota = 88;
const diaDaSemana = 'segunda-feira';
//1

function agenda(hora) {
    let message = '';

    if (currentHour > 4 && currentHour <= 11) {
        message = 'Hmmm, cheiro de café recém passado';
    } else if (currentHour > 11 && currentHour <= 14) {
        message = 'Hora do almoço!!!';
    } else if (currentHour > 14 && currentHour <= 18) {
        message = 'Vamos fazer um bolo pro café da tarde?';
    } else if (currentHour > 18 && currentHour <= 22) {
        message = 'Rango da noite, vamos jantar :D';
    } else if (currentHour > 22 || currentHour <= 4) {
        message = 'Não deveríamos comer nada, é hora de dormir';
    }
    return message;
}
console.log(agenda(currentHour));

//2
function area(comprimento, altura) {
    const area = comprimento * altura;
    return area;
}
function perimeter(comprimento, altura) {
    const perimeter = (comprimento * 2) + (altura * 2);
    return perimeter;
}

console.log('A area do retangulo é:', area(base, heigth), ' e o perimetro é:', perimeter(base, heigth));

//3

function isApproved(score) {
    let result = 0;
    if (score >= 80) {
        result = 1;
    } else if (score < 80 && score >= 60) {
        result = 2;
    } else if (score < 60 && score >= 0) {
        result = 3;
    } else {
        result = Math.round((Math.random() * 10) + 4);
    }

    //4
    switch (result) {
        case 1:
            return 'Parabéns, você foi aprovado(a)!';
            break;
        case 2:
            return 'Você está na nossa lista de espera.';
            break;
        case 3:
            return 'Você foi reprovado(a).';
            break;
        default:
            return 'Não se aplica.';
            break;
    }
}

console.log(isApproved(nota));

//5

function weekDays(date) {
    date.toLowerCase();
    let mensagem = '';
    let semana = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'];
    let fimDeSemana = ['sabado', 'domingo'];

    for (let i in semana) {
        if (date === semana[i]) {
            mensagem = 'Oba, mais um dia de aprendizado na Trybe >:D';
        }
    }
    for (let j in fimDeSemana) {
        if (date === fimDeSemana[j]) {
            mensagem = 'FINALMENTE, descanso merecido UwU';
        }
    }

    return mensagem;
}

console.log(weekDays(diaDaSemana));