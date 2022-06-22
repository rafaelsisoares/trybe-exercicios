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
console.log(soma);