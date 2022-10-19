import React, { useContext } from "react";
import TimerContext from "../context/TimerContext";

function RandomNumber() {
  const { randomNumber } = useContext(TimerContext);


  return (
    <section className="number-container">
      <p>O seu número da sorte é</p>
      <h3>{randomNumber}</h3>
    </section>
  );
}

export default RandomNumber;
