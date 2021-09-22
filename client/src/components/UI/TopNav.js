import React from 'react'
import styles from './TopNav.module.css';

const TopNav = (props) => {

   const classes =  styles.topnav + " " + props.className

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default TopNav;