import logo from './logo.svg';
import styles from './App.module.css';
import Dashboard from './pages/Dashboard.js';
import Accounts from './pages/Accounts.js';
import Contacts from './pages/Contacts';
import Invoices from './pages/Invoices';
import Products from './pages/Products';
import {Router, Switch, Route, Link, BrowserRouter, useHistory} from 'react-router-dom';
import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUsers, faCog, faUser, faBoxes, faFileInvoiceDollar, faChevronDown, faTrashAlt} from '@fortawesome/free-solid-svg-icons'


library.add(faUsers, faCog, faUser, faBoxes, faFileInvoiceDollar, faChevronDown);

const AppWrapper = () => {

  return(

      <App className={styles["App-size"]}></App>
  )
}

function App() {

  let history = useHistory();

  return (
    <React.Fragment>
        <Switch>

          <Route path ="/Accounts">
            <Accounts />
          </Route>
          <Route path ="/Contacts">
            <Contacts />
          </Route>
          <Route path ="/Invoices">
            <Invoices />
          </Route>
          <Route path ="/Products">
            <Products />
          </Route>
          <Route path="/">
            <Dashboard historyLayout={history}/>
          </Route>
        

        </Switch>
    </React.Fragment>




  
    );
}

export default AppWrapper;
