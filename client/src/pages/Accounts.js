import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import axios from 'axios'

import styles from "./pages.module.css"
import Masterdetail from "../components/UI/Masterdetail"
import TopNav from '../components/UI/TopNav.js';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu'
import CreateButton from '../components/UI/CreateButton'
import Accordion from '../components/Accordion';
import CommunicationForm from '../components/CommunicationForm';
import BillingForm from '../components/BillingForm';
import ShippingForm from '../components/ShippingForm';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

//this broke my build what is it for?
// import { STATES } from 'mongoose';

const navItems = [{ label: "Accounts", path: "/Accounts", active: true },
{ label: "Contacts", path: "/Contacts", active: false }, { label: "Invoices", path: "/Invoices", active: false },
{ label: "Products", path: "/Products", active: false }
]

// fetches accounts
const accountArray = [
    // {
    //     status: "Active",
    //     accountInfo: "ACT001 > Company > Santa Clara (CA)",
    //     accountName: "Carl's Jr. Consulting",
    //     phone1: "(243) 932-5834",
    //     category: "Company"
    // },
    // {
    //     status: "Inactive",
    //     accountInfo: "ACT002 > Company > Los Angeles (CA)",
    //     accountName: "Molestie Sed Foundation",
    //     phone1: "(666) 420-6969",
    //     category: "non-profit"
    // },
    // {
    //     status: "Disregard",
    //     accountInfo: "ACT003 > Company > Las Vegas (NV)",
    //     accountName: "Arcu Sed Institute",
    //     phone1: "(437) 890-4563",
    //     category: "small business"

    // }
]


const Accounts = () => {

    //state
    const [refetch, setRefetch] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const [masterRecords, setMasterRecords] = useState({ data: accountArray, active: 0, currDocument: accountArray[0] });
    const [activeRecord, setActiveRecord] = useState({});
    
    // possible way to get keys 
    // const [activeRecordKeys, setActiveRecordKeys] = usestate([])

    const addAccounts = (accounts) => {
        setMasterRecords(prevState => ({
            ...prevState, data: [...prevState.data, ...accounts]
        }));
        
    }

    const changeActiveStateHandler = (i) => {
        setMasterRecords(prevState => ({
            ...prevState, active: i
        }));
        setActiveIndex(i)
        setActiveRecord(masterRecords.data[i])
        // setActiveRecordKeys(activeRecord)

    }

    const newAccount = (account) => {
        const oldAccounts = masterRecords.data
        const newAccounts = [account, ...oldAccounts]
        setMasterRecords(prevState => ({
            ...prevState, data: newAccounts
        }))

    }

    const handleChange = async (e) => {
        console.log('hit handlechange')
        setActiveRecord({
            ...activeRecord,
            [e.target.name]: e.target.value

        })
       
        axios.put("http://localhost:3000/accounts/update",activeRecord)
       
    }

    const refetchSetter = () => {
        if (refetch === 0) {
            setRefetch(1)
        } else {
            // setRefetch(0)
        }
    }


    useEffect(() => {


        const fetchAccounts = async () => {

            const response = await axios.get("http://localhost:3000/accounts")

            addAccounts(response.data)


        }
        fetchAccounts()
    }, [])

    // Dummy JSON until database is ready


    return (
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <Masterdetail masterRecords={masterRecords} cardClick={changeActiveStateHandler} newAccount={newAccount} />
            <div className={styles.accordion__comms}>
                <Menu account={masterRecords} activeRecord={activeRecord} handleChange={handleChange}/>
                <Accordion label={"Communication"} icon={faChevronDown}>
                    <CommunicationForm activeRecord={activeRecord} handleChange={handleChange}></CommunicationForm>
                </Accordion>
                <Accordion label={"Billing"} icon={faChevronDown}>
                    <BillingForm activeRecord={activeRecord} handleChange={handleChange} />
                </Accordion>
                <Accordion label={"Shipping"} icon={faChevronDown}>
                    <ShippingForm activeRecord={activeRecord} handleChange={handleChange} />
                </Accordion>
            </div>
            <CreateButton changeActive={changeActiveStateHandler} fetchAccounts={refetchSetter} masterRecords={masterRecords} newAccount={newAccount} />
            <h1>Accounts</h1>

        </div>
    )

}

export default Accounts;
