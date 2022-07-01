function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dias = document.getElementById('days');
const botao = document.getElementsByClassName('buttons-container');
const botaoInterage = document.getElementsByTagName('button');
const holidays = document.getElementsByClassName('holidays');
const sextaFeira = document.getElementsByClassName('friday');
const tarefas = document.getElementsByClassName('my-tasks');
const tarefasSelecionar = document.getElementsByClassName('task');
let sextaOrigin = [];
let countClick = 0;
function createDays(array) {
  for (let i = 0; i < array.length; i += 1) {
    let dia = array[i];
    let diaLi = document.createElement('li');
    diaLi.className = 'day';
    diaLi.innerText = dia;

    if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
      diaLi.classList += ' friday';
      sextaOrigin.push(array[i]);
    }
    if (dia === 24 || dia === 25 || dia === 31) {
      diaLi.classList += ' holidays';
    }
    dias.appendChild(diaLi);
  }
}
function createButton(diaDoMes) {
  let button = document.createElement('button');
  if (diaDoMes === 'Feriados') {
    button.id = 'btn-holiday';
    button.innerText = diaDoMes;
    botao[0].appendChild(button);
  }
  if (diaDoMes === 'Sexta-feira') {
    button.id = 'btn-friday';
    button.innerText = diaDoMes;
    botao[0].appendChild(button);

  }
}
function createTasks(tarefa) {
  let task = document.createElement('span');
  task.innerText = tarefa;
  tarefas[0].appendChild(task);
}
function taskDesc(cor) {
  let divTask = document.createElement('div');
  divTask.classList = 'task';
  divTask.style.backgroundColor = cor;
  tarefas[0].appendChild(divTask);
}

function retornaFeriados() {

  for (let i = 0; i < holidays.length; i += 1) {
    holidays[i].style.backgroundColor = 'rgb(238,238,238)';
  }
  botaoInterage[0].addEventListener('click', destacaFeriados);
}

function destacaFeriados() {
  for (let i = 0; i < holidays.length; i += 1) {
    holidays[i].style.backgroundColor = 'white';
  }
  botaoInterage[0].addEventListener('click', retornaFeriados);
}
function sextou() {
  for (let i = 0; i < sextaFeira.length; i += 1) {
    sextaFeira[i].innerText = 'SEXTOOOU!!!!!';
  }
  botaoInterage[1].addEventListener('click', naoSextou);
}
function naoSextou() {
  for (let i = 0; i < sextaFeira.length; i += 1) {
    sextaFeira[i].innerText = sextaOrigin[i];
  }
}

function selectTask() {
  let selectedTasks = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function (event) {
    if (selectedTasks.length === 0) {
      event.target.classList = 'task selected';
    } else {
      event.target.classList = 'task'
    }
  });
}

function taskDays() {
  let selectedTasks = document.getElementsByClassName('task selected');
  let day = document.querySelector('#days');
  let task = document.querySelector('.task');
  let taskColor = task.style.backgroundColor;
  day.addEventListener('click', function(event){
    let dayOfTask = event.target.style.color;
    if(selectedTasks.length > 0 && dayOfTask !== taskColor) {
      let getColor = selectedTasks[0].style.backgroundColor;
      event.target.style.color = getColor;
    } else if (dayOfTask === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

createDays(decemberDaysList);
createButton('Feriados');
createButton('Sexta-feira');
retornaFeriados();
botaoInterage[1].addEventListener('click', sextou);
dias.addEventListener('mouseover', hideOver);
dias.addEventListener('mouseout', hideLeave);
createTasks('Cozinhar');
taskDesc('seagreen');
selectTask();
taskDays();

/* botaoInterage[0].addEventListener('click', destacaFeriados); */

function hideOver(event) {
  event.target.style.fontSize = '30px';
}
function hideLeave(event) {
  event.target.style.fontSize = '20px';
}
