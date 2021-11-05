import React from "react";
import styles from "./Menu.module.css";
import { useState } from "react";
import EditBox from "./UI/EditBox";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import Popover from "../pages/Popover";
import ButtonHeaderDescription from "./UI/Buttons/ButtonHeaderDescription.js";
import DuplicateSVG from "./SVG/DuplicateSVG";
import PrintSVG from "./SVG/PrintSVG";
import ReportSVG from "./SVG/ReportSVG";
import AddressSVG from "./SVG/AddressSVG";
import TrashSVG from "./SVG/TrashSVG";

export default function Menu( {activeRecord, handleChange, handleChangeClient, deleteHandler} ) {

    const inactive = activeRecord.status === "Inactive" ? styles['button__focus'] : "" ;
    
    const [selectState, setSelectState] = useState(activeRecord.category);
    
    // stops "undefined" from showing up on button
    let accountName = activeRecord.accountName === undefined ? "" : activeRecord.accountName

    const handleButtonClick = (e) => {

        let value = e.target.innerHTML;
        handleChangeClient(e, 'status', value);
    }

    const topRows = [
        {
            icon: <DuplicateSVG/>,
            header: "Duplicate",
            description: "Click here to duplicate the current Account."
        },
        {
            icon: <PrintSVG/>,
            header: "Print",
            description: "Click here to print the current Account in Detail Form."
        },
        {
            icon: <ReportSVG/>,
            header: "Report",
            description: "Click here to view this Account's list report."
        }
    ]

    const bottomRows = [
        {
            icon: <AddressSVG/>,
            header: "View Address Labels",
            description: "Click here to view this Account's address labels."
        },
        {
            icon: <PrintSVG/>,
            header: "Print Labels",
            description: "Click here to print the current found set of 33 record(s) in an Avery 5160 Label format."
        }
    ]

    return (
        <div className={`${styles.menu} ${"box-shadow"} ${"flex-center"} ${"no-select"}`}>

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
                
                {topRows.map((row) => (
                    <ButtonHeaderDescription icon={row.icon} header={row.header} description={row.description} />
                ))}

                <div className={styles.menu__labels}>
                    <div className={styles.menu__lineBreak}/>
                    <span>Labels</span>
                </div>
                
                                
                {bottomRows.map((row) => (
                    <ButtonHeaderDescription icon={row.icon} header={row.header} description={row.description} />
                ))}

                <div className={styles.menu__lineBreak} style={{margin: "13px 0"}}/>

                <div className={styles.menu__deleteButton}>
                    <TrashSVG/>
                    {`Delete ${accountName}`}
                </div>    
            </Popover>

            <label className={"no-select"}>Type</label>
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
