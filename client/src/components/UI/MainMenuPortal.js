import React from 'react'
import styles from "./MainMenuPortal.module.css";
import MainMenuPortalRow from './MainMenuPortalRow';

const MainMenuPortal = () => {
    return (
        <div className={styles.mainMenuPortal}>
            <MainMenuPortalRow/>
        </div>       
    )
}

export default MainMenuPortal
