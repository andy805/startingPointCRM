import React, { useState } from 'react';
import Masterdetail from "../components/UI/Masterdetail"
import styles from "./pages.module.css"
import TopNav from '../components/UI/TopNav.js';
import Navbar from '../components/Navbar';

const navItems = [ {label: "Accounts" , path: "/Accounts", active: true}, 
{label: "Contacts" , path: "/Contacts", active: false} ,{label: "Invoices" , path: "/Invoices", active: false}, 
{label: "Products" , path: "/Products", active: false} 
]



const Accounts = () => {

    // Dummy JSON until database is ready
    const [masterRecords] = useState([
        {
            status: "Active",
            accountInfo: "ACT001 > Company > Santa Clara (CA)",
            accountName: "Carl's Jr. Consulting",
            phone1: "(243) 932-5834"
        },
        {
            status: "Inactive",
            accountInfo: "ACT002 > Company > Los Angeles (CA)",
            accountName: "Molestie Sed Foundation",
            phone1: "(666) 420-6969"
        },
        {
            status: "Disregard",
            accountInfo: "ACT003 > Company > Las Vegas (NV)",
            accountName: "Arcu Sed Institute",
            phone1: "(437) 890-4563"
        },
    ]);

    return(
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <h1>Accounts</h1>
            <Masterdetail masterRecords={masterRecords}/>
        </div>
    )

}

export default Accounts;
