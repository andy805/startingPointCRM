
import styles from './DashboardButton.module.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const DashboardButton = (props) => {

    const classes = styles.dashboard + " " + props.className

    const goToPage = () => {
        let path = props.path;
        props.history.push(path);
    }

    return (
        <div>
            <FontAwesomeIcon icon="users">
            </FontAwesomeIcon>
        <button className={classes} onClick={goToPage}>{props.label}
        

        
        </button>
        </div>
    )
}

export default DashboardButton;