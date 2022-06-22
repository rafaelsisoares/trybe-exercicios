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

let max = Math.max(...numbers);
console.log('O maior valor é:', max);