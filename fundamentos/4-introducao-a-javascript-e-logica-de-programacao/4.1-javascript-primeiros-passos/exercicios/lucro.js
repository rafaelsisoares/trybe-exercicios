const custoProduto = 200 * 1.2; // Custo do produto com imposto de 20%
const valorVenda = 450;
let lucro = undefined;

if (custoProduto < 0 || valorVenda < 0) {
    console.log('Erro: Valor menor que zero');
}else{
    lucro = valorVenda - custoProduto
    console.log('O lucro após mil vendas do produto foi de', lucro * 1000);
}