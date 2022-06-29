const cabecalho = document.getElementById('header-container');
const corpo = document.getElementById('container');
const emergency = document.getElementsByClassName('emergency-tasks');
const nonEmergency = document.getElementsByClassName('no-emergency-tasks');
const emergencyTitle = document.querySelectorAll('.emergency-tasks div h3');
const noEmergencyTitle = document.querySelectorAll(".no-emergency-tasks div h3");
const rodape = document.getElementById('footer-container');

cabecalho.style.backgroundColor = '#00b069';

corpo.style.backgroundColor = '#f3f3f3';

emergency[0].style.backgroundColor = '#ff9f84';
nonEmergency[0].style.backgroundColor = '#f9db5e';


for (let j of noEmergencyTitle) {
    j.style.backgroundColor = '#232525';
}

for (let i of emergencyTitle) {
    i.style.backgroundColor = '#a500f3';
}

rodape.style.backgroundColor = '#003533';