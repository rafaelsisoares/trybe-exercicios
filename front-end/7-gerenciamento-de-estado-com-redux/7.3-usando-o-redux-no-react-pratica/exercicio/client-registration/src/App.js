import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </main>
  );
}

export default App;
