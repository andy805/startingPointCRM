
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from 'ButtonWithIcon.module.css';

const ButtonWithIcon = (props) => {

    const classes = styles.dashboard + " " + props.className

    const goToPage = () => {
        let path = props.path;
        props.history.push(path);
    }
    return (

        <div onClick={goToPage}>
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
            {props.label}
        </div>
    )
}