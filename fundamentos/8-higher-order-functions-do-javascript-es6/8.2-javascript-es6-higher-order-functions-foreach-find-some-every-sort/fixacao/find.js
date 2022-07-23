const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (arrayNum) => {
  const div35 = arrayNum.find((num) => num % 3 === 0 && num % 5 === 0);
  return div35;
}

console.log(findDivisibleBy3And5(numbers));


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arrayName) => {
  const fiveLetters = arrayName.find((name) => name.length === 5);
  return fiveLetters;
}

console.log(findNameWithFiveLetters(names));

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    const music = musicas.find((element) => element.id === id);
    return music;
  }
  
  console.log(findMusic('31031685'))