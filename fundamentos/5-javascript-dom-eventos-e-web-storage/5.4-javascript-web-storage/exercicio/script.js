const botaoDark = document.getElementById('dark');
const botaoCor = document.getElementById('cor');
/* const botao */

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

botaoDark.addEventListener('click', darkMode);

window.onload = function() {
    if(localStorage.length > 0) {
        if(localStorage.getItem('dark') === 'true') {
            darkMode();
        }
    }
}