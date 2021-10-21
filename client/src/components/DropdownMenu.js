import React from 'react';
import {useState} from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = (props) => {

    return (
        <div className={props.visible ? styles.dropdown : styles.dropdown__invisible}>
            {props.children}
        </div>
    )
}

export default DropdownMenu;