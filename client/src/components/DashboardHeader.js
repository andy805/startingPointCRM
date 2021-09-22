import React from 'react'
import styles from './DashboardHeader.module.css';


const DashboardHeader = (props) => {

    const today = new Date();
    const options = {year: "numeric" , month: "long", day: "numeric"};

    const classes = props.className ;
        return (
        <div className={classes}>

            <h1 className={styles.header}>{props.header + today.toLocaleDateString('en-US', options)}</h1>

        </div>
    );

}

export default DashboardHeader;