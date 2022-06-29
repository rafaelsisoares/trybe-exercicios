const atual = document.getElementById('elementoOndeVoceEsta');
const pai = atual.parentNode;
const filhoDoFilho = atual.firstElementChild;
const primeiroFilho = pai.firstElementChild;
const brother = atual.previousElementSibling;
const texto = atual.nextSibling;
const terceiroFilho = atual.nextElementSibling;
const thirdChild = pai.lastElementChild.previousElementSibling;
const brother2 = document.createElement('section');
const filhoAtual = document.createElement('aside');
const filhoDoFilhoDoFilho = document.createElement('div');
const terceiroFilho2 = filhoDoFilhoDoFilho.parentNode;

pai.style.color = 'rgb(50, 100, 100)';
filhoDoFilho.innerText = 'Texto adicionado por JavaScript';
atual.appendChild(filhoAtual)
filhoDoFilho.appendChild(filhoDoFilhoDoFilho);