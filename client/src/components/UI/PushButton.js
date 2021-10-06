import React, { useState } from "react";
import styles from "./PushButton.module.css";

function PushButton({ svgElement, width, height }) {
    // state to determine whether component is in focus
    const [focus, setFocus] = useState(false);

    // toggle focus when component is clicked
    const changeStyle = () => {
        if (focus) {
            setFocus(false);
        } else {
            setFocus(true);
        }
    };

    // Determine which styling to use for component depending on focus state
    const computedClassName = focus
        ? `${styles.pushButton} ${styles.pushButton__active}`
        : `${styles.pushButton}`;

    return (
        <div className={computedClassName} onClick={changeStyle} style={{ width, height}}>
            {svgElement}
        </div>
    );
}

export default PushButton;
