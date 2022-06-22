let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (let j = 0; j < numbers.length; j += 1) {
    soma += numbers[j];
}
console.log('A soma de todos os valores é:', soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

console.log('A média dos valores é:', soma / numbers.length);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

for (let k = 0; k < numbers.length; k += 1) {
    if (numbers[k] > 20) {
        console.log('Valor maior que 20');
    }else{
        console.log('Valor menor ou igual a 20');
    }
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = 0;
for (let l = 0; l < numbers.length; l += 1) {
    if (numbers[l] > maior) {
        maior = numbers[l];
    }
}
console.log('O maior valor é:', maior);

/* let max = Math.max(...numbers);
console.log('O maior valor é:', max); 
Outro método de obter o maior valor de um array*/

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0;
for (let m = 0; m < numbers.length; m += 1) {
    if (numbers[m] % 2 > 0) {
        impar += 1;
    }
}

if (impar > 0) {
    console.log('Existem', impar, 'valores ímpares');
}else{
    console.log('Nenhum valor ímpar encontrado');
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = maior;
for (let n = 0; n < numbers.length; n += 1) {
    if (numbers[n] < menor) {
        menor = numbers[n];
    }
}
console.log('O menor valor é:', menor);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array25 = [];
for (let o = 1; o <= 25; o += 1) {
    array25.push(o);
}
console.log(array25);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let p = 0; p < array25.length; p += 1) {
    console.log(array25[p], 'dividido por 2 é:', array25[p] / 2);
}