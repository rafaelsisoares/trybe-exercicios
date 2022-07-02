const botaoDark = document.getElementById('dark');
const botaoCor = document.getElementById('cor');
const botaoTamanho = document.getElementById('font-size');
const botaoEstilo = document.getElementById('font-family');
const botaoEspaco = document.getElementById('espaco');

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

function changeColor() {
    let colorClass = document.getElementsByClassName('textColor');
    let header = document.getElementById('colorHeader');
    let main = document.getElementById('colorText');
    if(colorClass.length === 0 || localStorage.getItem('color') === false) {
        header.classList = 'textColor';
        main.classList = 'textColor';
        localStorage.setItem('color', 'true');
    } else {
        header.removeAttribute('class');
        main.removeAttribute('class');
        localStorage.setItem('color', 'false');
    }
}

function fontFamily() {
    let familyClass = document.getElementsByClassName('family');
    let changeFont = document.getElementById('tipoDeFonte');
    if(familyClass.length === 0 || localStorage.getItem('family') === 'false') {
        changeFont.classList = 'family';
        localStorage.setItem('family', 'true');
    } else {
        changeFont.removeAttribute('class');
        localStorage.setItem('family', 'false');
    }
}

botaoDark.addEventListener('click', darkMode);
botaoTamanho.addEventListener('click', fontSize);
botaoCor.addEventListener('click', changeColor);
botaoEstilo.addEventListener('click', fontFamily);

window.onload = function() {
    if(localStorage.length > 0) {
        if(localStorage.getItem('dark') === 'true') {
            darkMode();
        }
        if(localStorage.getItem('size') === 'true'){
            fontSize();
        }
        if(localStorage.getItem('color') === 'true') {
            changeColor();
        }
        if(localStorage.getItem('family') === 'true') {
            fontFamily();
        }
    }
}