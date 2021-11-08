import React from 'react';
import styles from './Slide.module.css'

const Slide = (props) => {
    
    let slide = props.name === props.activeSlide ? styles['slide-active'] : styles['slide-inactive']
    const classes = styles.fade + " " + slide + " " + props.className

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Slide