// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let phraseArray = phrase.split(' ');
  return phraseArray;
}

// Desafio 4
function concatName(array) {
  let concatString = `${array[array.length - 1]}, ${array[0]}`;
  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNum) {
  let maior = Math.max.apply(null, arrayNum);
  let countMaior = 0;

  for (let i of arrayNum) {
    if (maior === i) {
      countMaior += 1;
    }
  }

  return countMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let countCat1 = Math.abs(cat1 - mouse);
  let countCat2 = Math.abs(cat2 - mouse);
  if (countCat1 < countCat2) {
    return 'cat1';
  }
  if (countCat2 < countCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function tres(num) {
  if (num % 3 === 0) {
    return true;
  }
}
function cinco(num) {
  if (num % 5 === 0) {
    return true;
  }
}

function fillArray(num) {
  let feed = '';
  if (tres(num) === true && cinco(num) === true) {
    feed = 'fizzBuzz';
  } else if (tres(num) === true) {
    feed = 'fizz';
  } else if (cinco(num) === true) {
    feed = 'buzz';
  } else {
    feed = 'bug!';
  }
  return feed;
}
function fizzBuzz(arrayNum) {
  let arrayStr = [];
  for (let index of arrayNum) {
    arrayStr.push(fillArray(index));
  }
  return arrayStr;
}
// Desafio 9
function crypt(letter) {
  let isValid = false;
  let arrayCod = ['#', 'a', 'e', 'i', 'o', 'u'];
  for (let index in arrayCod) {
    if (arrayCod[index] === letter) {
      isValid = true;
      return index.toString();
    }
  }
  if (isValid === false) {
    return letter;
  }
}
function encode(phrase) {
  let codificada = '';
  for (let i of phrase) {
    codificada += crypt(i);
  }
  return codificada;
}

function decrypt(char) {
  let isValid = false;
  let arrayCod = ['#', 'a', 'e', 'i', 'o', 'u'];
  for (let index in arrayCod) {
    if (index.toString() === char) {
      isValid = true;
      return arrayCod[index];
    }
  }
  if (isValid === false) {
    return char;
  }
}
function decode(phrase) {
  let decodificada = '';
  for (let i of phrase) {
    decodificada += decrypt(i);
  }
  return decodificada;
}

// Desafio 10
function techList(arrayTech, nome) {
  arrayTech.sort();
  let result = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let i of arrayTech) {
    result.push({ tech: i, name: nome });
  }

  return result;
}
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
