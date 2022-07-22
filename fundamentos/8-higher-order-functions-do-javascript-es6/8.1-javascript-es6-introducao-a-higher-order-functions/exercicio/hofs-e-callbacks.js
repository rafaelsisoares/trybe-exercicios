const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const createEmail = (fullName) => {
    const employee = fullName.split(' ');
    let newEmail = '';
    for (let i of employee) {
        (i === employee.at()) ? newEmail += `${i.toLowerCase()}_` : newEmail += i.toLowerCase() ;
    }
    return `${newEmail}@trybe.com`;
}

const hiredEmployee = (fullName) => ({
    name: fullName,
    email: createEmail(fullName),
});

//console.log(newEmployees(hiredEmployee));

const checkResults = (gamble, drawn) => {
   if (gamble === drawn) {
        return 'Parabéns, você ganhou!!';
    } else {
        return 'Tente novamente.';
    }
}

const bet = (num, callback) => {
    const drawn = Math.floor((Math.random() * 5) + 1);
    return callback(num, drawn);
} 

//console.log(bet(2, checkResults));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkScore = (right, student) => {
    let score = 0;
    for (let i = 0; i < right.length; i += 1) {
        if (student[i] === right[i]) {
            score += 1;
        } else if (student[i] !== 'N.A') {
            score -= 0.5;
        }
    }

    return score;
}

const finalScore = (right, student, callback) => `Sua nota final é: ${callback(right, student)}`;

console.log(finalScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkScore));