import React from 'react';
import { useHistory } from 'react-router-dom';


const Dashboard = (props) => {

    const goToAccounts = () => {
        let pathToAccounts = "/Accounts";
        props.historyLayout.push(pathToAccounts);
    }
    const goToContacts = () => {
        let pathToAccounts = "/Contacts";
        props.historyLayout.push(pathToAccounts);
    }

    return (
        <div>

            <button onClick={goToAccounts}>Account</button>
            <button onClick={goToContacts}>Contact</button>
            <button>Invoice</button>
            <button>Products</button>
            <button>Preferences</button>

        </div>

    )
}

export default Dashboard;