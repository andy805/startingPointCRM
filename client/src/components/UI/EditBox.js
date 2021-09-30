import React from 'react'
import styles from "./EditBox.module.css";

function EditBox( {fieldName, fieldData, activeRecord, width = {width: "100%"}} ) {
    return (
        <div className={styles.editBox}>
            <label className={styles.label}>{fieldName}</label>
            <input
                type="text"
                value={activeRecord?.accountName}
                style={width}
            />
            <div className={styles.editBox__lineBreak} />
        </div>
    )
}

export default EditBox
