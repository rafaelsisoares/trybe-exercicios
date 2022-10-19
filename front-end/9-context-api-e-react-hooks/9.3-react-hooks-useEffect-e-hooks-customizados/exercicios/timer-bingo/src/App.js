import React, { useContext } from 'react';

import './App.css';
import Bingo from './components/Bingo';
import RandomNumber from './components/RandomNumber';
import Timer from './components/Timer';
import TimerContext from './context/TimerContext';

function App() {
  const { bingo } = useContext(TimerContext);

  return (
    <section>
      <Timer />
      <RandomNumber />
      {bingo && <Bingo />}
    </section>
  );
}

export default App;
