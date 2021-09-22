import React from 'react';
import { useHistory } from "react-router";
import Masterdetail from "../components/UI/Masterdetail"
import styles from "./Accounts.module.css"
import TopNav from '../components/UI/TopNav.js';
import Navbar from '../components/Navbar';

const navItems = [ {label: "Accounts" , path: "/Accounts", active: true}, 
{label: "Contacts" , path: "/Contacts", active: false} ,{label: "Invoices" , path: "/Invoices", active: false}, 
{label: "Products" , path: "/Products", active: false} 
]



const Accounts = () => {

    return(
        <div className={styles.accounts}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <h1>Accounts</h1>
            <Masterdetail/>
        </div>
    )

}

export default Accounts;
