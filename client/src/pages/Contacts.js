import React from 'react';
import axios from 'axios'
import {useState, setState, useEffect} from 'react'
import { useHistory } from "react-router";
import Masterdetail from "../components/UI/Masterdetail"
import styles from "./pages.module.css"
import TopNav from '../components/UI/TopNav.js';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu.js'

const basePath = "https://shielded-oasis-43540.herokuapp.com/"

const navItems = [ {label: "Accounts" , path: "/Accounts", active: false}, 
{label: "Contacts" , path: "/Contacts", active: true} ,{label: "Invoices" , path: "/Invoices", active: false}, 
{label: "Products" , path: "/Products", active: false} 
]


const contactArray = [];

const Contacts = () => {
    const [refetch, setRefetch] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const [masterRecords, setMasterRecords] = useState({ data: contactArray, active: 0, currDocument: contactArray[0] });
    const [activeRecord, setActiveRecord] = useState({});

const addRecords = (contacts) => {''
    setMasterRecords(prevState => ({
        ...prevState, data: [...prevState.data, ...contacts]
    }));

}

useEffect(()=>{
    console.log('hit fetch')
    const fetchContacts = async ()=>{
        const response = await axios.get(basePath+"contacts")  
        console.log('hit', response)
        addRecords(response.data)
        setActiveRecord(masterRecords.data[0])
    }
  
fetchContacts()
},[])


    return(
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <h1>Contacts</h1>
            <Masterdetail 
            masterRecords={masterRecords}
            createPath={basePath+"contacts/create"}
            />
            {/* <Menu>
                activeRecord={activeRecord}
            </Menu> */}
        </div>
    )

}

export default Contacts;
