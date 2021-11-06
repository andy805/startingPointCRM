import React from 'react'
import styles from "./AccordionButton.module.css"

const AccordionButton = ({icon, label, email}) => {

    const handleurl = () => {

        if(email == null || email === "" ) {

        }
        else {

            window.location.href= "mailto:"+email

        }

    }

    return (
        <div onClick={handleurl}  className={`${styles.accordionButton} ${"box-shadow"}`}>
            {icon}
            <p>{label}</p>
        </div>
    )
}

export default AccordionButton
