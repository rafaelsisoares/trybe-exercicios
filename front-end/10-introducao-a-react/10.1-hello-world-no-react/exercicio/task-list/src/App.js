import logo from './logo.svg';
import './App.css';

const tasks = ['Fazer o café da manhã', 'Exercícios', 'Fazer o almoço', 'Estudar', 'Fazer o jantar', 'Pagar as contas'];
const jsxTasks = tasks.map((task) => <li>{task}</li>);
const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

function App() {
  return (
    <section>
      <h2>Lista de Tarefas</h2>
      <ol>{jsxTasks}</ol>
    </section>
  );
}

export default App;
