import React from "react";
import styles from "./Menu.module.css";
import { useState } from "react";
import EditBox from "./UI/EditBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEllipsisH, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Popover from "../pages/Popover";
import ButtonHeaderDescription from "./UI/Buttons/ButtonHeaderDescription.js";


export default function Menu( {activeRecord, handleChange, handleChangeClient, deleteHandler} ) {

    let dupButtonDescription = "Click here to duplicate the current account";
    const inactive = activeRecord.status === "Inactive" ? styles['button__focus'] : "" ;
    
    const [selectState, setSelectState] = useState(activeRecord.category);

    const handleButtonClick = (e) => {

        let value = e.target.innerHTML;
        handleChangeClient(e, 'status', value);
    }

    return (
        <div className={`${styles.menu} ${"box-shadow"} ${"flex-center"}`}>

            {/* Width prop lets you change width of EditBox */}
            {/* If no width is specified it defaults to 100% width */}
            <EditBox
                fieldName={"Account"}
                activeRecord={activeRecord}
                width={{ width: "270px" }}
                keyName={"accountName"}
                fieldData={activeRecord.accountName}
                handleChange={handleChange}
                handleChangeClient={handleChangeClient}

            />

            <Popover icon={faEllipsisH}>
                {/* any thing in between the popover will be in the menu */}
                <ButtonHeaderDescription icon={faCopy} header={"Duplicate"} description={dupButtonDescription} />
                <ButtonHeaderDescription function={deleteHandler} icon={faTrashAlt} color={"red"} header={"Delete " +activeRecord.accountName}  />
                <button className={styles.button__popup__delete}>{`Delete ${activeRecord.accountName}`}</button>
            </Popover>

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
