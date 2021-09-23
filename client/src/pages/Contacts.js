import React from 'react';
import { useHistory } from "react-router";
import Masterdetail from "../components/UI/Masterdetail"
import styles from "./pages.module.css"
import TopNav from '../components/UI/TopNav.js';
import Navbar from '../components/Navbar';

const navItems = [ {label: "Accounts" , path: "/Accounts", active: false}, 
{label: "Contacts" , path: "/Contacts", active: true} ,{label: "Invoices" , path: "/Invoices", active: false}, 
{label: "Products" , path: "/Products", active: false} 
]



const Contacts = () => {

    return(
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <h1>Contacts</h1>
            <Masterdetail/>
        </div>
    )

}

export default Contacts;
