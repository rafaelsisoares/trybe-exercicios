import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients';
import Registration from './pages/Registration';
import './App.css';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/clients' component={Clients} />
        <Route exact path='/registration' component={Registration} />
      </Switch>
    </main>
  );
}

export default App;
