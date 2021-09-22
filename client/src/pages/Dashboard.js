import React from 'react';
import DashboardButton from '../components/DashboardButton';
import styles from './Dashboard.module.css';
import Card from '../components/UI/Card'
import { useHistory } from 'react-router-dom';
import ButtonWithIcon from '../components/ButtonWithIcon.js';


const Dashboard = (props) => {

    const goToAccounts = () => {
        let pathToAccounts = "/Accounts";
        props.historyLayout.push(pathToAccounts);
    }
    const goToContacts = () => {
        let pathToAccounts = "/Contacts";
        props.historyLayout.push(pathToAccounts);
    }

    return (
        <div className={styles.dashboard}>

            <Card className={styles["card-button-area"]}> 
                <ButtonWithIcon className={styles["card-grid-cell-center"] +" "+ styles["card-grid-cell-one-one"]} icon={"users"} history={props.historyLayout} path={"/Accounts"} label={"Account"}/>
                <ButtonWithIcon className={`${styles["card-grid-cell-center"]} ${styles["card-grid-cell-one-two"]}`} icon={"user"}  history={props.historyLayout} path={"/Contacts"} label={"Contacts"}/>
                <ButtonWithIcon className={`${styles["card-grid-cell-center"]} ${styles["card-grid-cell-one-three"]}`} icon={"file-invoice-dollar"} history={props.historyLayout} path={"/Invoices"} label={"Invoices"}/>
                <ButtonWithIcon className={`${styles["card-grid-cell-center"]} ${styles["card-grid-cell-two-one"]}`} icon={"boxes"} history={props.historyLayout} path={"/Products"} label={"Products"}/>
                <ButtonWithIcon className={`${styles["card-grid-cell-center"]} ${styles["card-grid-cell-two-two"]}`} icon={"cog"} history={props.historyLayout} path={"/System"} label={"System"}/>
                <ButtonWithIcon className={`${styles["card-grid-cell-center"]} ${styles["card-grid-cell-three-three"]}`} icon={"users"} label={"Accounts"} history={props.historyLayout} path={"/Account"}></ButtonWithIcon>
                
            </Card>
        </div>

    )
}

export default Dashboard;