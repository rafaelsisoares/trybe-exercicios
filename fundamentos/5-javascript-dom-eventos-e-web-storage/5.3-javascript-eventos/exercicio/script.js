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
function createDays(array) {
  for (let i = 0; i < array.length; i += 1) {
    let dia = array[i];
    let diaLi = document.createElement('li');
    diaLi.className = 'day';
    diaLi.innerText = dia;

    if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
      diaLi.classList += ' friday';
    }
    if (dia === 24 || dia === 25 || dia === 31) {
      diaLi.classList += ' holidays';
    }
    dias.appendChild(diaLi);
  }
}
createDays(decemberDaysList);
