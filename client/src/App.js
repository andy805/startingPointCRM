import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard.js';
import Accounts from './pages/Accounts.js';
import Contacts from './pages/Contacts';
import {Router, Switch, Route, Link, BrowserRouter, useHistory} from 'react-router-dom';

const AppWrapper = () => {

  return(

      <App></App>
  )
}

function App() {

  let history = useHistory();

  return (
    <div>
        <Switch>

          <Route path ="/Accounts">
            <Accounts />
          </Route>
          <Route path ="/Contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <Dashboard historyLayout={history}/>
          </Route>
        

        </Switch>
    </div>




  
    );
}

export default AppWrapper;
