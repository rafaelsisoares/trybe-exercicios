//1
const fatorial = (num) => {
    for(let i = num - 1; i > 0; i -= 1) {
        num *= i;
    }
    return num;
}

console.log(fatorial(5));
//2
const largestWord = (phrase) => {
    const arrayPhrase = phrase.split(' ');
    let longestWord = '';
    for (let i = 0; i < arrayPhrase.length; i += 1) {
        (arrayPhrase[i].length > longestWord.length) ? longestWord = arrayPhrase[i] : '';
    }

    return longestWord;
};

console.log(largestWord('Spa Francorchamps não pode ficar de fora do calendário da F1!'));

//3
const change = (name) => {
    const phrase = 'Tryber x aqui!';
    let newPhrase = '';
    for (let i = 0; i < phrase.length; i += 1) {
        (phrase[i] === 'x') ? newPhrase += name : newPhrase += phrase[i];
    }

    return tech(newPhrase);
}

const tech = (phrase) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    return `${phrase}
Minhas três principais habilidades são:
${skills}`;
}

console.log(change('Rafael'));