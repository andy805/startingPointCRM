import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import Masterdetail from "../components/UI/Masterdetail"
import styles from "./pages.module.css"
import TopNav from '../components/UI/TopNav.js';
import Navbar from '../components/Navbar';

const navItems = [ {label: "Accounts" , path: "/Accounts", active: true}, 
{label: "Contacts" , path: "/Contacts", active: false} ,{label: "Invoices" , path: "/Invoices", active: false}, 
{label: "Products" , path: "/Products", active: false} 
]



const Accounts = () => {
    const [accounts, setAccounts] = useState({})
    useEffect (() =>{
        
        async function accountCall(){
            console.log('hit')
        const request =  fetch('/localhost:3000')
        console.log(request)
        setAccounts({...request})
    }
},[]

)

    return(
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <h1>Accounts</h1>
            <Masterdetail/>
        </div>
    )

}

export default Accounts;
