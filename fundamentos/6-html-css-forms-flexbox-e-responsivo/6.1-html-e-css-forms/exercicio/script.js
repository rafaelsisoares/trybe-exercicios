const botaoSubmit = document.getElementById('btn-send');
const botaoDark = document.getElementById('btn-dark-mode');
const botaoAumentaFonte = document.getElementById('btn-text-bigger');
const inputName = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputAnswer = document.getElementById('resposta');
const consientimento = document.getElementById('consientimento');
const corpo = document.querySelector('body')

botaoSubmit.addEventListener('click', (event) => {
    if(inputName.value.length < 10 || inputName.value.length > 40) {
        alert('Dados Inválidos');
        event.preventDefault();
    } else if(inputEmail.value.length < 10 || inputEmail.value.length > 50) {
        alert('Dados Inválidos');
        event.preventDefault();
    } else if(inputAnswer.value.length === 0 || inputAnswer.value.length > 500) {
        alert('Dados Inválidos');
        event.preventDefault();
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
});

botaoDark.addEventListener('click', () => {
    if(corpo.classList.contains('dark-mode')) {
        corpo.classList.remove('dark-mode');
    } else {
        corpo.classList.add('dark-mode');
    }
});

botaoAumentaFonte.addEventListener('click', () => {
    if(corpo.classList.contains('text-bigger')) {
        corpo.classList.remove('text-bigger');
    } else {
        corpo.classList.add('text-bigger');
    }
});