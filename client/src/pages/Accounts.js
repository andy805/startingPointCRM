import React, { useEffect, useState } from "react";
import Masterdetail from "../components/UI/Masterdetail";
import styles from "./pages.module.css";
import TopNav from "../components/UI/TopNav.js";
import Navbar from "../components/Navbar";
import axios from "axios";
import Menu from "../components/Menu";

const navItems = [
    { label: "Accounts", path: "/Accounts", active: true },
    { label: "Contacts", path: "/Contacts", active: false },
    { label: "Invoices", path: "/Invoices", active: false },
    { label: "Products", path: "/Products", active: false },
];

// fetches accounts
const accountArray = [];
const firstAccount = [];
const Accounts = () => {
    const [accounts, setAccounts] = useState(accountArray);
    
    //place holder untill we chaing ids 
    // const [currentAccount,setCurrentAccount ] = useState(firstAccount)
    
    

    useEffect(() => {
        const fetchAccounts = async () => {
            const response = await axios.get("http://localhost:3000/accounts");
            
            setAccounts([...response.data]);
        };
        fetchAccounts();
    }, []);

    // Dummy JSON until database is ready
    // const [masterRecords] = useState([
    //     {
    //         status: "Active",
    //         accountInfo: "ACT001 > Company > Santa Clara (CA)",
    //         accountName: "Carl's Jr. Consulting",
    //         phone1: "(243) 932-5834",
    //     },
    //     {
    //         status: "Inactive",
    //         accountInfo: "ACT002 > Company > Los Angeles (CA)",
    //         accountName: "Molestie Sed Foundation",
    //         phone1: "(666) 420-6969",
    //     },
    //     {
    //         status: "Disregard",
    //         accountInfo: "ACT003 > Company > Las Vegas (NV)",
    //         accountName: "Arcu Sed Institute",
    //         phone1: "(437) 890-4563",
    //     },
    // ]);
    return (
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <Menu account={accounts}/>
            <Masterdetail masterRecords={accounts} />
        </div>
    );
};

export default Accounts;
