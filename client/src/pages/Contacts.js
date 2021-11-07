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

const test = {
    status: "Active",
    firstName: "Test",
    lastName: "Last Name"
};

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

    const handleChangeClient = (e, fieldName, value) => {
        /* fieldname and value are optional paramters */
        if(fieldName == null){
            /* this is default case. this run when we are updated the fields(input tags) */
            setActiveRecord({
                ...activeRecord,
                [e.target.name]: e.target.value

            })
        }
        else {
            /* this used when we cant get the field to update as quickly
             * primary example is with the buttons in the menu. if they click active, inactive
             * then we the field name to update and the value */
            setActiveRecord({
                ...activeRecord,
                [fieldName]: value

            })
            const newData = masterRecords.data
            newData[activeIndex][fieldName] = value;
            setMasterRecords(prevState => ({
                ...prevState, 
                data: newData 
            }));

            axios.put(basePath+"contacts/update", activeRecord)

            }
    }

    const handleChange = async (e) => {
        console.log('hit handlechange')
        setActiveRecord({
            ...activeRecord,
            [e.target.name]: e.target.value

        })

        await axios.put(basePath+"contacts/update", activeRecord)
        const id = activeRecord._id;
        let i = 0;
        while(i < masterRecords.data.length){
            if(masterRecords.data[i]._id === id){
                let newObj = JSON.stringify(activeRecord);
                masterRecords.data[i] = JSON.parse(newObj)
            }
            i++;
        }
        

    }


useEffect(()=>{
    console.log('hit fetch')
    const fetchContacts = async ()=>{
        const response = await axios.get(basePath+"contacts")  
        console.log('hit', response)
        addRecords(response.data)
        // setActiveRecord(masterRecords.data[0])
    }

  
fetchContacts()
},[])

    const changeActiveStateHandler = (i) => {
        setMasterRecords(prevState => ({
            ...prevState, active: i
        }));
        setActiveIndex(i)
        setActiveRecord(masterRecords.data[i])
        // setActiveRecordKeys(activeRecord)

    }

    return(
        <div className={styles.page}>
            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <Masterdetail 
            masterRecords={masterRecords}
            createPath={basePath+"contacts/create"}
            mainLabel={['firstName', 'lastName']}
            cardClick={changeActiveStateHandler}
            />
            <Menu
                    account={masterRecords}
                    activeRecord={activeRecord}
                    // handleChange={handleChange}
                    // handleChangeClient={handleChangeClient}
                    // deleteHandler={deleteRecord}
            />
            {/* <Menu>
                activeRecord={activeRecord}
            </Menu> */}
        </div>
    )

}

export default Contacts;
