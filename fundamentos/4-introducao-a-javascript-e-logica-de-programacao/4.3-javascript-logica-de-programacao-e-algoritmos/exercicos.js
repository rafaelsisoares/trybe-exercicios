let fatorial = 10;
let result = 0;
//Crie um algoritmo que retorne o fatorial de 10

for (let i = fatorial; i > 1; i -= 1) {
    if (result === 0) {
        result = i * (i - 1);
    } else {

        result = result * (i - 1);
    }
}

console.log(result);

//Crie um algoritmo que inverta uma palavra
let word = 'Esta frase está invertida';
let invertedWord = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
    invertedWord = invertedWord + word[index];
    
}
console.log(invertedWord);

//Crie dois algoritmos, um que retorne a maior palavra desse array e outro que retorne a menor
let array = ['java', 'javascript', 'python', 'html', 'css'];
let largestWord = '';

for (let index1 = 0; index1 < array.length; index1 += 1) {
    if (array[index1].length > largestWord.length) {
        largestWord = array[index1];
    }
}

let smallestWord = largestWord;
for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2].length < smallestWord.length) {
        smallestWord = array[index2];
    }
}
console.log('A maior palavra é', largestWord);
console.log('A menor palavra é', smallestWord);

//Escreva um algoritmo que retorne o maior número primo entre 2 e 50

let maiorPrimo = 2;
for (let i = 2; i <= 50; i += 1) {
    if (i % 2 > 0 && i % 3 > 0) {
        if (i > maiorPrimo) {
            maiorPrimo = i;
        }
    }
}

console.log('O maior número primo entre 2 e 50 é:', maiorPrimo);