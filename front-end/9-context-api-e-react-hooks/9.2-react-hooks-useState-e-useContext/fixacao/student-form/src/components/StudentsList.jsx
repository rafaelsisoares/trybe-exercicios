import React, { useContext } from "react";
import FormContext from "../context/FormContext";

function StudentsList() {
  const { students } = useContext(FormContext);
  return (
    <section>
      <ul>
        {students.map((student, i) => (
          <li key={i}>
            <strong> Nome: {student.name}</strong>
            <p>{student.age} anos</p>
            <p>Cidade: {student.city}</p>
            <p>Está atualmente no módulo {student.module}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StudentsList;
