import React from "react";
import styles from "./Menu.module.css";
import { useState } from "react";
import EditBox from "./UI/EditBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import Popover from "../pages/Popover";


export default function Menu( {activeRecord, handleChange, handleChangeClient} ) {

    const inactive = activeRecord.status === "Inactive" ? styles['button__focus'] : "" ;
    
    console.log(activeRecord.category);
    const [selectState, setSelectState] = useState(activeRecord.category);

    const handleButtonClick = (e) => {

        let value = e.target.innerHTML;
        handleChangeClient(e, 'status', value);
    }

    return (
        <div className={`${styles.menu} ${"box-shadow"} ${"flex-center"}`}>

            {/* Width prop lets you change width of EditBox */}
            {/* If no width is specified it defaults to 100% width */}
            <div>
                <EditBox
                    fieldName={"Account"}
                    activeRecord={activeRecord}
                    width={{ width: "270px" }}
                    keyName={"accountName"}
                    fieldData={activeRecord.accountName}
                    handleChange={handleChange}
                    handleChangeClient={handleChangeClient}

                />
                {/* <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon> */}
                <Popover icon={faEllipsisH}>
                    {/* any thing in between the popover will be in the menu */}
                    <h1>Hello </h1>
                    <button className={styles.button__popup}>Duplicate</button>
                    <button className={styles.button__popup}> delete</button>
                </Popover>
            </div>

            <label>Type</label>
            <select value={activeRecord.category}>
                <option className={styles.menu__chooseOption}>Choose...</option>
            </select>
            <div className={styles.menu__lineBreak} />

            <div className={styles.menu__buttons}>
                <button onClick={handleButtonClick} className={activeRecord.status === "Active" ? styles['button__focus'] : "" }>Active</button>
                <button onClick={handleButtonClick} className={inactive + " " +styles.menu__middleButton}>Inactive</button>
                <button onClick={handleButtonClick} className={activeRecord.status === "Disregard" ? styles['button__focus'] : ""} >Disregard</button>
            </div>
        </div>
    );
}
