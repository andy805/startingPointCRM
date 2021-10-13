import React from "react";
import {useState} from 'react'
import styles from "./EditBox.module.css";


const EditBox = ({
    fieldName,
    fieldData,
    activeRecord,
    handleChange,
    handleChangeClient,
    keyName,
    width = { width: "100%" },
    lineBreak = true,
})=>{

    
    const [flagChange, setFlagChange] = useState(false);
    const [val, setVal] = useState(fieldData);

    const handleSave = (e) => {
        if(flagChange) {
            console.log("flag change is on");
            setFlagChange(false)
            handleChange(e);
        }
    }
    const handleEdit = (e) => {
        
        setFlagChange(true);
        handleChangeClient(e); 

    }

    return (
        <div className={styles.editBox}>
            <label className={styles.label}>{fieldName}</label>
            <input
                onChange={handleEdit}
                type="text"
                name={keyName}
                style={width}
                value={fieldData}
                onBlur={handleSave}
            />
            <div className={lineBreak ? styles.editBox__lineBreak : ""} />
        </div>
    );

}


export default EditBox;
