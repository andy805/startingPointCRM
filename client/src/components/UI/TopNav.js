import React from 'react'
import styles from './TopNav.module.css';
import HomeSVG from "../SVG/HomeSVG";
import CalendarSVG from "../SVG/CalendarSVG";
import ToDoSVG from "../SVG/ToDoSVG";

const TopNav = (props) => {
    const classes = styles.topnav + " " + props.className;

    return (
        <div className={classes}>
            {/* <HomeSVG /> */}
            {/* <CalendarSVG /> */}
            {/* <ToDoSVG /> */}
            {props.children}
        </div>
    );
};

export default TopNav;