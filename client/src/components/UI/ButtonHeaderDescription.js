import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ButtonHeaderDescription.module.css';

const ButtonHeaderDescription = (props) => {

    return (
        <div className={styles.buttonContainer}>
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
            <div className={styles.textContainer}>
                <h6>{props.header}</h6>
                <p>{props.description}</p>
            </div>
        </div>
    )

}

export default ButtonHeaderDescription