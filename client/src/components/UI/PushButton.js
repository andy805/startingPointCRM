import React, { useState } from "react";
import styles from "./PushButton.module.css";

function PushButton({ svgElement, width, height, title, counterField, slideFunc, activeSlide }) {
    // state to determine whether component is in focus
    const [focus, setFocus] = useState(false);

    // toggle focus when component is clicked
    const changeStyle = (ev) => {
            setFocus(true);
            slideFunc(ev, title);
    };

    // Determine which styling to use for component depending on focus state
    const computedClassName = activeSlide === title
        ? `${styles.pushButton} ${styles.pushButton__active}`
        : `${styles.pushButton}`;

    return (
        <div className={computedClassName} onClick={changeStyle} style={{ width, height}}>
            {svgElement}
            <div className={styles.pushButton__label}>
                {title && `${title} (${counterField})`}
            </div>
        </div>
    );
}

export default PushButton;
