import React, { useContext } from "react";

import TimerContext from "../context/TimerContext";
import { ONE_SECOND } from "../utils/constants";
import useTimer from "../hooks/useTimer";

export default function Timer() {
  const { timer, counter } = useContext(TimerContext)
  useTimer(counter, ONE_SECOND);

  return (
    <div className="timer-container">
      <h1>{timer}</h1>
    </div>
  );
}
