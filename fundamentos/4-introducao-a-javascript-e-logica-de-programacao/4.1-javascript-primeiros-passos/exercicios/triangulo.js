const primeiroLado = 50;
const segundoLado = 60;
const terceiroLado = 70;

if (primeiroLado < 0 || segundoLado < 0 || terceiroLado < 0) {
    console.log('Erro: Angulo inválido');
}else if (primeiroLado + segundoLado + terceiroLado === 180) {
    console.log(true);
}else{
    console.log(false);
}