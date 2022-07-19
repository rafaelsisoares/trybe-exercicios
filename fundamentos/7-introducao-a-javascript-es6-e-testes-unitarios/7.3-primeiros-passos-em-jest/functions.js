function crypt(letter) {
    let isValid = false;
    let arrayCod = ['0', 'a', 'e', 'i', 'o', 'u'];
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
    let arrayCod = ['0', 'a', 'e', 'i', 'o', 'u'];
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

  function hydrate(bebida) {
    let aux = 0;
    let recommended = 0;
    let extrairNumeros = bebida.replace(/\D/g, '');
    for (let i in extrairNumeros) {
      if (extrairNumeros.length > 0) {
        aux = Number(extrairNumeros[i]);
        recommended += aux;
      }
    }
    if (recommended === 1) {
      return `${recommended} copo de água`;
    }
    return `${recommended} copos de água`;
}

module.exports = {
    encode,
    decode,
    techList,
    hydrate
};