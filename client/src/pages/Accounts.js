import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import Masterdetail from "../components/UI/Masterdetail"
import styles from "./pages.module.css"
import TopNav from '../components/UI/TopNav.js';
import Navbar from '../components/Navbar';
import axios from 'axios'

const navItems = [ {label: "Accounts" , path: "/Accounts", active: true}, 
{label: "Contacts" , path: "/Contacts", active: false} ,{label: "Invoices" , path: "/Invoices", active: false}, 
{label: "Products" , path: "/Products", active: false} 
]

// fetches accounts
const accountArray = []
const Accounts = () => {
    
    const [accounts, setAccounts] = useState(accountArray)
    
   
    
    useEffect (() =>{


      const fetchAccounts = async ()=>{
          
        const response = await axios.get("http://localhost:3000")
        console.log('hit', response.data)
        const check = response.data
        console.log(check)
       setAccounts(check)
        
      }
      fetchAccounts()
    },[])

    
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
