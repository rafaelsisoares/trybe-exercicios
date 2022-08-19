import React from 'react';
import './App.css';

class App extends React.Component{

  constructor() {
    super()
    this.msg = this.msg.bind(this);
    this.msg2 = this.msg2.bind(this);
    this.msg3 = this.msg3.bind(this);
  }

  state = {
    clickCounterMsg1: 0,
    clickCounterMsg2: 0,
    clickCounterMsg3: 0
  }

  msg() {
    this.setState((state, _props) => ({
      clickCounterMsg1: state.clickCounterMsg1 + 1
    }))
    console.log('Ei! Você me clicou!');
  }
  
  msg2() {
    this.setState((state, _props) => ({
      clickCounterMsg2: state.clickCounterMsg2 + 1
    }))
    console.log('Qual você prefere? iOS ou Android?');
  }
  
  msg3() {
    this.setState((state, _props) => ({
      clickCounterMsg3: state.clickCounterMsg3 + 1
    }))
    console.log('AYYYYYYYYYYYRTON SENNA DO BRASIL!!!!');
  }

  render() {
    return (
      <section>
      {console.log(this)}
      <button onClick={this.msg}>Clique aqui</button>
      <button onClick={this.msg2}>Pergunta</button>
      <button onClick={this.msg3}>Nostalgico</button>
    </section>
    );

  }
}

export default App;
