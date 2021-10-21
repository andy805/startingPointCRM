import React from 'react'
import styles from './TopNav.module.css';
import HomeSVG from "../SVG/HomeSVG";
import CalendarSVG from "../SVG/CalendarSVG";
import ToDoSVG from "../SVG/ToDoSVG";
import {Link} from 'react-router-dom'

const TopNav = (props) => {
    const classes = styles.topnav + " " + props.className;

    return (
        <div className={classes}>
            <div className={styles.topNav__buttons}>
                <Link to={'/'} className={styles.topNav__buttonBackground}>
                    <HomeSVG />
                </Link>
                <div className={styles.topNav__buttonBackground}>
                    <CalendarSVG />
                </div>
                <div className={styles.topNav__buttonBackground}>
                    <ToDoSVG />
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default TopNav;