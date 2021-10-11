import React from 'react';
import axios from 'axios'
import {useState, setState, useEffect} from 'react'
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
const [masterRecords, setMasterRecords] = useState([])

const addContacts = (contacts)=>{
    setMasterRecords(contacts)
}

useEffect(()=>{

    const fetchContacts = async ()=>{
        const response = await axios.get("http://localhost:3000/contacts")  
        addContacts(response.data)
    }
  
fetchContacts()
},[])
console.log(masterRecords)
    return(
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <h1>Contacts</h1>
            <Masterdetail masterRecords={masterRecords}/>
        </div>
    )

}

export default Contacts;
