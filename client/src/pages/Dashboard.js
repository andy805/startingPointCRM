import React from 'react';
import DashboardButton from '../components/DashboardButton';
import styles from './Dashboard.module.css';
import Card from '../components/UI/Card'
import { useHistory } from 'react-router-dom';


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
                <DashboardButton className={styles["card-grid-cell-center"] +" "+ styles["card-grid-cell-one-one"]} history={props.historyLayout} path={"/Accounts"} label={"Account"}/>
                <DashboardButton className={`${styles["card-grid-cell-center"]} ${styles["card-grid-cell-one-two"]}`} history={props.historyLayout} path={"/Contacts"} label={"Contacts"}/>
                <DashboardButton className={`${styles["card-grid-cell-center"]} ${styles["card-grid-cell-one-three"]}`} history={props.historyLayout} path={"/Invoices"} label={"Invoices"}/>
                <DashboardButton className={`${styles["card-grid-cell-center"]} ${styles["card-grid-cell-two-one"]}`} history={props.historyLayout} path={"/Products"} label={"Products"}/>
                <DashboardButton className={`${styles["card-grid-cell-center"]} ${styles["card-grid-cell-two-two"]}`} history={props.historyLayout} path={"/System"} label={"System"}/>
            </Card>
        </div>

    )
}

export default Dashboard;