let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//Valor esperado no console: "Bem-vinda: Margarida"

console.log('Bem-vinda:', info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = 'Sim';
console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
    console.log(key);
}

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

for (let key in info) {
    console.log(info[key]);
}

/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. */

let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let key in info) {
    if (info[key] === infoPatinhas[key]) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + infoPatinhas[key]);
    }
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log.

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo );

//7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array.

leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco'});

//8 -  Acesse as chaves nome e livrosFavoritos e faça um console.log

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');


//FUNÇÕES

//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromo(word) {
    let invertedWord = '';
    for (let i = word.length - 1; i >= 0; i -= 1) {
        invertedWord = invertedWord + word[i];
    }
    if (word === invertedWord) {
        return true;
    }else{
        return false;
    }

}

console.log(palindromo('arara'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let sequenciaNumerica = [2, 3, 6, 7, 10, 1];

function indiceDoMaior(array) {
    let indexMax = 0;
    for (let key = 0; key < array.length; key += 1) {
        if (array[indexMax] < array[key]) {
            indexMax = key;
        }
    }
    return indexMax;    
}

console.log(indiceDoMaior(sequenciaNumerica));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let conjuntoNumerico = [2, 4, 6, 7, 10, 0, -3];
function indiceDoMenor(array) {
    let indexMin = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[indexMin] > array[i]) {
            indexMin = i;
        }
    }
    return indexMin;
}

console.log(indiceDoMenor(conjuntoNumerico));
//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
    let nomeMaior = '';
    for (let key in array) {
        if (array[key].length > nomeMaior.length) {
            nomeMaior = array[key];
        }
    }
    return nomeMaior;
}

console.log(maiorNome(nomes));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.


//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.