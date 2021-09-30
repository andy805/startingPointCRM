import React from "react";
import styles from "./Menu.module.css";
import { useState } from "react";
import EditBox from "./UI/EditBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";


export default function Menu( {activeRecord} ) {

    const inactive = activeRecord.status === "Inactive" ? styles['button__focus'] : "" ;
    
    console.log(activeRecord.category);
    const [selectState, setSelectState] = useState(activeRecord.category);

    return (
        <div className={`${styles.menu} ${"box-shadow"} ${"flex-center"}`}>

            {/* Width prop lets you change width of EditBox */}
            {/* If no width is specified it defaults to 100% width */}
            <EditBox
                fieldName={"Account"}
                activeRecord={activeRecord}
                width={{ width: "270px" }}
            />
            <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>


            <label>Type</label>
            <select value={activeRecord.category}>
                <option className={styles.menu__chooseOption}>Choose...</option>
            </select>
            <div className={styles.menu__lineBreak} />

            <div className={styles.menu__buttons}>
                <button className={activeRecord.status === "Active" ? styles['button__focus'] : "" }>Active</button>
                <button className={inactive + " " +styles.menu__middleButton}>Inactive</button>
                <button className={activeRecord.status === "Disregard" ? styles['button__focus'] : ""} >Disregard</button>
            </div>
        </div>
    );
}
