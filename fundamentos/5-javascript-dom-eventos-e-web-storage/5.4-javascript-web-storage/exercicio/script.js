const botaoDark = document.getElementById('dark');
const botaoCor = document.getElementById('cor');
const botaoTamanho = document.getElementById('font-size');

function darkMode() {
    let darkClass = document.getElementsByClassName('dark');
    let principal = document.getElementById('principal');
    
        if(darkClass.length === 0 || localStorage.getItem('dark') === 'false') {
            principal.classList = 'dark';
            let troca = localStorage.getItem('dark');
            troca = 'true';
            localStorage.setItem('dark', troca);
        } else {
            principal.removeAttribute('class');
            let troca = localStorage.getItem('dark');
            troca = 'false';
            localStorage.setItem('dark', troca);
        }
    ;
}

function fontSize() {
    let sizeClass = document.getElementsByClassName('sizeOfFont');
    let main = document.getElementById('tamanhoDaFonte');
    if(sizeClass.length === 0 || localStorage.getItem('size') === 'false') {
        main.classList = 'sizeOfFont';
        let troca = localStorage.getItem('size');
            troca = 'true';
            localStorage.setItem('size', troca);
    } else {
        main.removeAttribute('class');
        let troca = localStorage.getItem('size');
            troca = 'false';
            localStorage.setItem('size', troca);
    }
}

botaoDark.addEventListener('click', darkMode);
botaoTamanho.addEventListener('click', fontSize);

window.onload = function() {
    if(localStorage.length > 0) {
        if(localStorage.getItem('dark') === 'true') {
            darkMode();
        }
        if(localStorage.getItem('size') === 'true'){
            fontSize();
        }
    }
}