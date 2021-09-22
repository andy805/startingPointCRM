
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ButtonWithIcon.module.css';

const ButtonWithIcon = (props) => {

    const classes = /*styles["whole-button"] + */" " + styles.dashboard + " " + props.className ;
    //const dashboardIcon = "3x";

    const goToPage = () => {
        let path = props.path;
        props.history.push(path);
    }
    return (

        <div className={classes} onClick={goToPage}>
            <FontAwesomeIcon size={"9x"} className={styles["card-grid-cell-center"]} icon={props.icon} color="white"></FontAwesomeIcon>
            <label className={styles["label-block"]}>{props.label}</label>
            
        </div>
    )
}


export default ButtonWithIcon;