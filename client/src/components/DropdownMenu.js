import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = (props) => {

    // opens and closes Popover
    const handleClick = () => {
        props.setVisible(!props.visible);
    };

    return (
        <div className={props.visible ? styles.dropdown : styles.dropdown__invisible}>
            {props.children}
            {/* Close button for popover */}
            {props.visible && (
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    onClick={props.visible ? handleClick : ""}
                    style={styles.close}
                />
            )}
        </div>
    )
}

export default DropdownMenu;