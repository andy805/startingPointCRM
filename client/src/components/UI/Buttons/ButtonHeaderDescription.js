import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ButtonHeaderDescription.module.css';

const ButtonHeaderDescription = (props) => {

    return (
        <div className={styles.buttonContainer} onClick={props.function}>
            <FontAwesomeIcon className={styles.buttonIcon} icon={props.icon}></FontAwesomeIcon>
            <div className={styles.textContainer}>
                <h6 className={styles.header}>{props.header}</h6>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )

}

export default ButtonHeaderDescription