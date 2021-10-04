import React from 'react'
import styles from "./AccordionButton.module.css"

const AccordionButton = ({icon, label}) => {
    return (
        <div className={`${styles.accordionButton} ${"box-shadow"}`}>
            {icon}
            <p>{label}</p>
        </div>
    )
}

export default AccordionButton
