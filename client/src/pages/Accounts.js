import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import styles from "./pages.module.css"
import Masterdetail from "../components/UI/Masterdetail"
import TopNav from '../components/UI/TopNav.js';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu'
import Accordion from '../components/Accordion';
import CommunicationForm from '../components/CommunicationForm';
import BillingForm from '../components/BillingForm';
import ShippingForm from '../components/ShippingForm';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AccordionButton from '../components/UI/AccordionButton';
import PhoneSVG from '../components/SVG/PhoneSVG'
import EmailSVG from '../components/SVG/EmailSVG';
import WebsiteSVG from '../components/SVG/WebsiteSVG';
import MapSVG from '../components/SVG/MapSVG';
import MainMenu from '../components/MainMenu';
import { CurrentUserContext, useCurrentUser } from "../context/UserContext.js"

const billingTextElement = (
    <div className={styles.card__text}>
        <p>Ap #886-1276 Feugiat Rd.</p>
        <p>Augusta, MD 54655</p>
    </div>
);

const shippingTextElement = (
    <div className={styles.card__text}>
        <p>709-6634 Lorem Rd.</p>
        <p>South Portland, MS 26987</p>
    </div>
);

//this broke my build what is it for?
// import { STATES } from 'mongoose';


// const basePath = "http://shielded-oasis-43540.herokuapp.com/"
const basePath = "http://localhost:3000/"

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
]

const Accounts = () => {

    //state
    const [refetch, setRefetch] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const [masterRecords, setMasterRecords] = useState({ data: accountArray, active: 0, currDocument: accountArray[0] });
    const [activeRecord, setActiveRecord] = useState({});
    const [activeSlide, setActiveSlide] = useState("Contacts");
    const [activeView, setActiveView] = useState("DetailView");
    const currentUser = useContext(CurrentUserContext)

    // possible way to get keys 
    // const [activeRecordKeys, setActiveRecordKeys] = usestate([])

    const addAccounts = (accounts) => {

        setMasterRecords(prevState => ({
            ...prevState, data: [...prevState.data, ...accounts]
        }));

    }

    const changeActiveSlideHandler = (ev, title) => {
        setActiveSlide(title);
    }

    // Handles active push button in MasterDetail
    const changeActiveViewHandler = (ev, title) => {
        setActiveView(title);
    }

    const changeActiveStateHandler = (i) => {
        setMasterRecords(prevState => ({
            ...prevState, active: i
        }));
        setActiveIndex(i)
        setActiveRecord(masterRecords.data[i])
        // setActiveRecordKeys(activeRecord)

    }

    /*used to update the state only ---> see createButton component to see push request to server */
    const newAccount = (account) => {
        const oldAccounts = masterRecords.data
        const newAccounts = [account, ...oldAccounts]
        setMasterRecords(prevState => ({
            ...prevState, data: newAccounts
        }))

    }

    const handleChangeClient = (e, fieldName, value) => {
        /* fieldname and value are optional paramters */
        if (fieldName == null) {
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

            axios.put(basePath + "accounts/update", activeRecord)

        }
    }

    const handleChange = async (e) => {
        setActiveRecord({
            ...activeRecord,
            [e.target.name]: e.target.value

        })

        await axios.put(basePath + "accounts/update", activeRecord)
        const id = activeRecord._id;
        let i = 0;
        while (i < masterRecords.data.length) {
            if (masterRecords.data[i]._id === id) {
                let newObj = JSON.stringify(activeRecord);
                masterRecords.data[i] = JSON.parse(newObj)
            }
            i++;
        }


    }

    const handleButtonStatus = (e) => {

    }

    const refetchSetter = () => {
        if (refetch === 0) {
            setRefetch(1)
        } else {
            // setRefetch(0)
        }
    }

    const find = async (query) => {
        console.log(query)
        const response = await axios.get(basePath + "accounts/find",
            {
                params: {
                    accountName: query
                }
            }
        )
        console.log(response)
        setMasterRecords(prevState => ({
            ...prevState, data: response.data
        }));
        console.log(masterRecords)
        refetchSetter()

    }

    const createRelatedRecord = (target) =>{

    }

    useEffect(() => {

        const fetchAccounts = async () => {

            const id = currentUser.currentUser._id
            console.log('id for param', id)
            const response = await axios.get(basePath + "accounts", {
                params: {
                    userID: id
                }
            }
            )
            console.log('accounts ', response)
            addAccounts(response.data)
            if (response.data.lenth === 0) {
            }
            else {
                setActiveRecord(response.data[0])
            }
        }
        fetchAccounts()
    }, [refetch])

    const deleteRecord = async () => {
        const currIndex = masterRecords.active;
        const res = await axios.delete(basePath + "accounts/delete", {
            data: { _id: activeRecord._id }
        })
        console.log(res);
        let newArray = masterRecords.data.splice(masterRecords.active, 1);
        /* three cases 
         * 1. delete the last element
         * 2. delete the first element
         * 3. delete the only element
         */
        if (masterRecords.active === 0 && masterRecords.data.length === 1) {
            /* we are deleting the only element in the array */
        }
        else if (masterRecords.active === 0) {
            setActiveIndex(0);
            setActiveRecord(masterRecords.data[0]);
            setMasterRecords({ data: masterRecords.data, active: 0, currDocument: masterRecords.data[0] })
        }
        else {
            setActiveIndex(currIndex - 1);
            setActiveRecord(masterRecords.data[currIndex - 1]);
            setMasterRecords({ data: masterRecords.data, active: currIndex - 1, currDocument: masterRecords.data[currIndex - 1] })
        }
    }

    /**************************************
     * json array that holds the icon name and the name for the icon
     * used in main menu, it is the butto
     */

    return (
        <div className={styles.page}>

            <TopNav className={styles.navbar}>
                <Navbar navItems={navItems}></Navbar>
            </TopNav>
            <Masterdetail
                masterRecords={masterRecords}
                cardClick={changeActiveStateHandler}
                newAccount={newAccount}
                user={currentUser}
                find={find}
                createPath={basePath + "accounts/create"}
                mainLabel={["accountName"]}
                changeSlides={changeActiveViewHandler}
                activeSlide={activeView}
            />
            <div className={styles.accordion__comms}>
                <Menu
                    account={masterRecords}
                    activeRecord={activeRecord}
                    handleChange={handleChange}
                    handleChangeClient={handleChangeClient}
                    deleteHandler={deleteRecord}
                />

                <Accordion
                    label={"Communication"}
                    icon={faChevronDown}
                    buttons={[
                        <AccordionButton icon={<PhoneSVG />} label={'Call Primary'} />,
                        <AccordionButton icon={<EmailSVG />} label={'Send Email'} /*email={activeRecord.email}*/ />,
                        <AccordionButton icon={<WebsiteSVG />} label={'Visit Website'} />
                    ]}
                >
                    <CommunicationForm
                        activeRecord={activeRecord}
                        handleChange={handleChange}
                        handleChangeClient={handleChangeClient}
                    />
                </Accordion>

                <Accordion
                    label={"Billing"}
                    icon={faChevronDown}
                    buttons={[
                        <AccordionButton icon={<MapSVG />} label={'Open in Map'} />
                    ]}
                    text={billingTextElement}
                >
                    <BillingForm
                        activeRecord={activeRecord}
                        handleChange={handleChange}
                        handleChangeClient={handleChangeClient}
                    />

                </Accordion>

                <Accordion
                    label={"Shipping"}
                    icon={faChevronDown}
                    buttons={[
                        <AccordionButton icon={<MapSVG />} label={'Open in Map'} />
                    ]}
                    text={shippingTextElement}
                >
                    <ShippingForm
                        activeRecord={activeRecord}
                        handleChange={handleChange}
                        handleChangeClient={handleChangeClient}
                    />
                </Accordion>
            </div>
            <MainMenu
                changeSlides={changeActiveSlideHandler}
                activeSlide={activeSlide}
            />
        </div>
    )
}

export default Accounts;
