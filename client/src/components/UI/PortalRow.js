import react, { useState } from "react";
import Card from "./Card";
import styles from "./PortalRow.module.css";

const PortalRow = ({status, headerLabel, mainLabel, phone1}) => {

    return (
        <div className={styles.portalRow}>
            <div
                className={`${styles.status} ${styles.statusBackground}`}
                status={status} // changes css classes for left edge of portal row
            >
                <div className={styles.statusText}>{status}</div>
            </div>

            <div className={styles.labelContainer}>
                <div className={styles.headerLabel}>
                    {headerLabel}
                </div>

                <div className={styles.mainLabel}>{mainLabel}</div>
                <div className={styles.subLabel}>{phone1}</div>
            </div>
        </div>
    );
};

export default PortalRow;
