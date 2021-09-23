
import React from 'react';
import { useHistory } from "react-router";
import Masterdetail from "../components/UI/Masterdetail"
import styles from "./pages.module.css"
import TopNav from '../components/UI/TopNav.js';
import Navbar from '../components/Navbar';

const navItems = [ {label: "Accounts" , path: "/Accounts", active: false}, 
{label: "Contacts" , path: "/Contacts", active: false} ,{label: "Invoices" , path: "/Invoices", active: true}, 
{label: "Products" , path: "/Products", active: false} 
]



const Invoices = () => {

    return(
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <h1>Invoices</h1>
            <Masterdetail/>
        </div>
    )

}

export default Invoices;
