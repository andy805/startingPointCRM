import React from "react";
import styles from "./EditBox.module.css";


const EditBox = ({
    fieldName,
    fieldData,
    activeRecord,
    handleChange,
    keyName,
    width = { width: "100%" },
    lineBreak = true,
})=>{
    return (
        <div className={styles.editBox}>
            <label className={styles.label}>{fieldName}</label>
            <input
            onChange={handleChange}
                type="text"
                name={keyName}
                style={width}
            />
            <div className={lineBreak ? styles.editBox__lineBreak : ""} />
        </div>
    );

}


export default EditBox;
