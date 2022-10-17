import React, { useContext, useState } from 'react'
import FormContext from '../context/FormContext';

function Form() {
  const { addStudent } = useContext(FormContext);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      name,
      age,
      city,
      module,
    };

    addStudent(newStudent);
    setName('');
    setAge(0);
    setCity('');
    setModule('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Nome:
            <input type="text" name='name' value={name} onChange={({target}) => setName(target.value)} />
        </label>
        <label htmlFor="age">
            Idade:
            <input type="number" name='age' onChange={({target}) => setAge(target.value)}/>
        </label>
        <label htmlFor="city">
            Cidade:
            <input type="text" name='city' onChange={({target}) => setCity(target.value)}/>
        </label>
        <label htmlFor="module">
            Módulo:
            <input type="radio" name='module' id='module' value='Fundamentos' onChange={({target}) => setModule(target.value)}/>
            Fundamentos
            <input type="radio" name='module' id='module' value='Front-end' onChange={({target}) => setModule(target.value)} />
            Front-end
            <input type="radio" name='module' id='module' value='Back-end' onChange={({target}) => setModule(target.value)} />
            Back-end
            <input type="radio" name='module' id='module' value='Computer Science' onChange={({target}) => setModule(target.value)} />
            Computer Science
        </label>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Form;
