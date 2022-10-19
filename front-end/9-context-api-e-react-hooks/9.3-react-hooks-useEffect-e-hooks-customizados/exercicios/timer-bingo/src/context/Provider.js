import React, { useState } from "react";
import useTimer from "../hooks/useTimer";
import {
  MAX_TIMER,
  MAX_RANDOM_NUMBER,
  ONE,
  MAX_TIME_BINGO,
  ONE_SECOND,
} from "../utils/constants";
import TimerContext from "./TimerContext";

function Provider({ children }) {
  const [timer, setTimer] = useState(1);
  const [randomNumber, setRandomNumber] = useState(1);
  const [bingo, setBingo] = useState(false);

  
  const counter = () => {
    if (timer < MAX_TIMER) {
        setTimer(timer + 1);
    } else {
      setTimer(1);
      generateNumber();
    }
  };

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * MAX_RANDOM_NUMBER + ONE);
    console.log(newNumber);
    setRandomNumber(newNumber);
  };

  const isMultiple = () => randomNumber % 3 === 0 || randomNumber % 5 === 0;

  const checkBingo = () => {
    if (isMultiple() && timer < MAX_TIME_BINGO) {
      setBingo(true);
    } else {
      setBingo(false);
    }
  };

  useTimer(checkBingo, ONE_SECOND);

  return (
    <TimerContext.Provider
      value={{ timer, counter, randomNumber, generateNumber, bingo }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export default Provider;
