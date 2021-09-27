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
const accountArray = [ 
        // {
        //     status: "Active",
        //     accountInfo: "ACT001 > Company > Santa Clara (CA)",
        //     accountName: "Carl's Jr. Consulting",
        //     phone1: "(243) 932-5834"
        // },
        // {
        //     status: "Inactive",
        //     accountInfo: "ACT002 > Company > Los Angeles (CA)",
        //     accountName: "Molestie Sed Foundation",
        //     phone1: "(666) 420-6969"
        // },
        // {
        //     status: "Disregard",
        //     accountInfo: "ACT003 > Company > Las Vegas (NV)",
        //     accountName: "Arcu Sed Institute",
        //     phone1: "(437) 890-4563"
        // }
    ]


const Accounts = () => {
    
    const [masterRecords, setMasterRecords] = useState({data: accountArray , active: 0});
    
    const addAccounts = (accounts) => {                               
                 setMasterRecords(prevState => ({
                      ...prevState, data: [...prevState.data , ...accounts]
                 }));
             }
    const changeActiveStateHandler = (i) => {
        setMasterRecords(prevState => ({
            ...prevState , active: i
        }));
    }
    
    useEffect (() =>{


      const fetchAccounts = async ()=>{
          
          const response = await axios.get("http://localhost:3000")
        console.log('hit', response.data)
        addAccounts(response.data)
        

      }
      fetchAccounts()
    },[])

    // Dummy JSON until database is ready
    console.log(masterRecords)

    return(
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <h1>Accounts</h1>
            <Masterdetail masterRecords={masterRecords} cardClick={changeActiveStateHandler}/>
        </div>
    )

}

export default Accounts;
