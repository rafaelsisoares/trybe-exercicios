const nota = 10;
let result;

if (nota >= 80) {
    result = 'aprovado';
}else if (nota < 80 && nota >= 60) {
    result = 'lista';
}else if (nota < 60 && nota >= 0){
    result = 'reprovado';
}

switch (result) {
    case 'aprovado':
        console.log('Parabéns, você foi aprovado(a)!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break;
    case 'reprovado':
        console.log('Você foi reprovado(a).');
        break;
    default:
        console.log('Não se aplica.');
        break;
}