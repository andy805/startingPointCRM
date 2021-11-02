

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ButtonIconUp.module.css';

const ButtonIconUp= (props) => {

    const classes = /*styles["whole-button"] + */" " + styles.dashboard + " " + props.className ;
    //const dashboardIcon = "3x";

    return (

        <div className={styles.parent} onClick={props.onClickFunction}>
            <FontAwesomeIcon size={"9x"} className={styles.icon} icon={props.icon} color={"white"}></FontAwesomeIcon>
            <label className={styles.label}>{props.label}</label>
            
        </div>
    )
}


export default ButtonIconUp;