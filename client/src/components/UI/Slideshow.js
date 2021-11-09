
import React from 'react';
import styles from './Slideshow.module.css';

const Slideshow = (props) => {

    const classes = styles.slideshow +" "+ props.className

    return (
        <div className={classes} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default Slideshow;