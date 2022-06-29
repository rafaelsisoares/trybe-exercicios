const atual = document.getElementById('elementoOndeVoceEsta');
const pai = atual.parentNode;
const filhoDoFilho = atual.firstElementChild;
const primeiroFilho = pai.firstElementChild;
const brother = atual.previousElementSibling;
const texto = atual.nextSibling;
const terceiroFilho = atual.nextElementSibling;
const thirdChild = pai.lastElementChild.previousElementSibling;

pai.style.color = 'rgb(50, 100, 100)';
filhoDoFilho.innerText = 'Texto adicionado por JavaScript';