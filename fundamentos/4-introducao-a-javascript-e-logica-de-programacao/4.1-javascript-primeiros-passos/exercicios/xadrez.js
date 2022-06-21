let peca = 'BiSpO';
peca = peca.toLowerCase();

switch (peca) {
    case "torre":
        console.log("Movimentos na vertical e na horizontal sem limite de casas");
        break;
    case "cavalo":
        console.log(
            "Movimento de duas casas na vertical mais uma casa na horizontal"
        );
        break;
    case "bispo":
        console.log("Movimentos na diagonal sem limite de casas");
        break;
    case 'rainha':
        console.log('Movimentos na vertical, na horizontal e na diagonal sem limite de casas');
        break;
    case "rei":
        console.log("Movimentos na vertical, na horizontal e na diagonal apenas uma casa");
        break;
    case "peao":
        console.log("Movimentos na vertical apenas uma casa e na diagonal para eliminar outra peça");
        break;
    default:
        console.log('Essa peça não existe');
}
