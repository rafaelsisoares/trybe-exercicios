// Desafio 11
let aviso = 'não é possível gerar um número de telefone com esses valores';
function incorrectSize(arrayNum1) {
  if (arrayNum1.length !== 11) {
    return false;
  }
}
function incorrectValues(arrayNum2) {
  for (let i = 0; i < arrayNum2.length; i += 1) {
    if (arrayNum2[i] < 0 || arrayNum2[i] > 9) {
      return false;
    }
  }
}
function sortArray(arrayNum) {
  let control = [];
  for (let i of arrayNum) {
    control.push(i);
  }
  return control.sort(function (a, b) { return a - b; });
}
function repeat(arrayNum3) {
  let control = sortArray(arrayNum3);
  for (let j = 1; j < control.length - 1; j += 1) {
    if (control[j] === control[j + 1] && control[j] === control[j - 1]) {
      return false;
    }
  }
}
function mountNumber(arrayNum4) {
  let numero = '(';
  for (let i of arrayNum4) {
    if (numero.length === 3) {
      numero += ') ';
      numero += i;
    } else if (numero.length === 10) {
      numero += '-';
      numero += i;
    } else {
      numero += i;
    }
  }
  return numero;
}

function generatePhoneNumber(arrayPhone) {
  let phoneNumber = '';
  if (incorrectSize(arrayPhone) === false) {
    return 'Array com tamanho incorreto.';
  } if (incorrectValues(arrayPhone) === false || repeat(arrayPhone) === false) {
    return aviso;
  }
  phoneNumber = mountNumber(arrayPhone);

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let control1 = lineB + lineC;
  let control2 = Math.abs(lineB - lineC);
  if (lineA < control1 && lineA > control2) {
    return true;
  }
  return false;
}

// Desafio 13
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
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
