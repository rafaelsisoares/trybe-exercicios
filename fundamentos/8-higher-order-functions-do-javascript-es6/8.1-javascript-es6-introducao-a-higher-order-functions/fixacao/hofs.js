const wakeUp = () => 'Acordando!';
const breakfast = () => 'Bora tomar café!';
const goToBed = () => 'Partiu dormir!';

const doingThings = (funcao) => console.log(funcao());

doingThings(goToBed);