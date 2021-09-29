import React from 'react';
import styles from './Accordion.module.css';
import {useState} from 'react';
import Card from './UI/Card';


const Accordion = (props) => {
    console.log(props.className);

    const [slideOpen, setSlideOpen] = useState(false);

    const slide = (ev) => {
        
        console.log(ev.target.nextElementSibling.style.display);
        // ev.target.nextElementSibling.style.display ="block";
        setSlideOpen(prevState => !prevState);
    }

    return (
        <Card >
            <button className={styles.accordion} onClick={slide}>Section 1</button>
            <div className={!slideOpen ? styles.panelClose : styles.PanelOpen}>
            {props.children}
            </div>
        </Card>
    )

}

export default Accordion;