import React from 'react';
import styles from './Accordion.module.css';
import {useState} from 'react';
import Card from './UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Accordion = (props) => {
    console.log(props.className);

    const [slideOpen, setSlideOpen] = useState(false);

    const slide = (ev) => {
        
        // console.log(ev.target.nextElementSibling.style.display);
        // ev.target.nextElementSibling.style.display ="block";
        setSlideOpen(prevState => !prevState);
    }

    return (
        <Card className={styles.card}>
            <div className={styles.card__header}>
                <label className={styles.label} onClick={slide}>{props.label}</label>
                <FontAwesomeIcon onClick={slide} className={styles.icon} icon={props.icon} ></FontAwesomeIcon>
            </div>
            <div className={!slideOpen ? styles.panelClose : styles.panelOpen + " " + styles['field-container']}>
            {props.children}
            </div>
            <div className={styles.card__buttons}>
                {!slideOpen ? props.buttons: ""}
            </div>
        </Card>
    )

}

export default Accordion;