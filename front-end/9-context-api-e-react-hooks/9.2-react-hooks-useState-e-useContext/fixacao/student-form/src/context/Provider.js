import React, {useState} from 'react'
import FormContext from './FormContext';

function Provider({children}) {
  const [students, setStudents] = useState([])

  function addStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  return (
    <div>
        <FormContext.Provider value={{addStudent, students}}>
            {children}
        </FormContext.Provider>
    </div>
  )
}

export default Provider;
