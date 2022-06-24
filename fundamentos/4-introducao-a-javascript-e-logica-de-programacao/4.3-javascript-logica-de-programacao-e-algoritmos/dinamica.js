/* 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha. */

/* let array = [];
for ( let index = 15; index <= 155; index += 1) {
 array.push(index)
}
console.log(array)
let numerosDiv3 = [];
for ( let index = 0; index < array.length; index += 1) {
    if ( numerosDiv3[index] % 3 === 0 && numerosDiv3[index] % 2 !== 0) {
        numerosDiv3.push(array[index]);
    }
}

if(numerosDiv3.length >= 50) {
    console.log('Batata!');
} */
/* console.log(numerosDiv3);
let numImpares = [];
for (let index= 0 ; index < numerosDiv3.length; index += 1) {
    if ( numerosDiv3[index] % 2 !== 0){
        numImpares.push(numerosDiv3[index])
    }
    }
    if (numImpares.length <= 50) {
        console.log ("top secret")
    } */

    /*3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
“Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.*/

let jogo = ['Pedra', 'Papel', 'Tesoura'];
let jogador1 = jogo[Math.round(Math.random() * 2)];
let jogador2 = jogo[Math.round(Math.random() * 2)];



if (jogador1 === jogador2) {
    console.log('Empate');
}else if ((jogador1 === jogo[2] && jogador2 === jogo[1]) || (jogador1 === jogo[0] && jogador2 === jogo[2]) || (jogador1 === jogo[1] && jogador2 === jogo[0])) {
    console.log('Jogador 1 venceu');
}else{
    console.log('Jogador 2 venceu');
}

