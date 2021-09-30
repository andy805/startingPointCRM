import React from 'react'
import styles from "./EditBox.module.css";

function EditBox( {activeRecord, width = {width: "100%"}} ) {
    return (
        <div className={styles.editBox}>
            <label>Name </label>
            <input type="text" value={activeRecord.accountName} style={width}/>
            <div className={styles.editBox__lineBreak} />
        </div>
    )
}

export default EditBox
