const salarioBruto = 3000;
let salarioBase;
let salarioLiquido;
let aliquotaINSS;
let aliquotaIR;
let parcelaIR;
let descontoIR;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = 0.08;
    salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
}else if (salarioBruto >= 1556.95 && salarioBruto < 2594.92) {
    aliquotaINSS = 0.09;
    salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
}else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
    aliquotaINSS = 0.11;
    salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
}else{
    aliquotaINSS = 570.88;
    salarioBase = salarioBruto - aliquotaINSS;
}

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
}else if (salarioBase >= 1903.99 && salarioBase < 2826.65) {
    aliquotaIR = 0.075;
    parcelaIR = 142.8;
    descontoIR = (salarioBase * aliquotaIR) - parcelaIR;
    salarioLiquido = salarioBase - descontoIR;
    console.log('O salário a receber é de ', salarioLiquido);
}
else if (salarioBase >= 2826.66 && salarioBase < 3751.05) {
    aliquotaIR = 0.15;
    parcelaIR = 354.8;
    descontoIR = (salarioBase * aliquotaIR) - parcelaIR;
    salarioLiquido = salarioBase - descontoIR;
    console.log('O salário a receber é de ', salarioLiquido);
}else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIR = 0.225;
    parcelaIR = 636.13;
    descontoIR = (salarioBase * aliquotaIR) - parcelaIR;
    salarioLiquido = salarioBase - descontoIR;
    console.log('O salário a receber é de ', salarioLiquido);
}else{
    aliquotaIR = 0.275;
    parcelaIR = 869.36;
    descontoIR = (salarioBase * aliquotaIR) - parcelaIR;
    salarioLiquido = salarioBase - descontoIR;
    console.log('O salário a receber é de ', salarioLiquido)
}