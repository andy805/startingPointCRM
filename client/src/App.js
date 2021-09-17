import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Switch>

      <Route path="/">
        <Dashboard />
      </Route>


    </Switch>




  
    );
}

export default App;
