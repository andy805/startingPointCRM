import react, { useState } from "react";
import Card from "./Card";
import styles from "./PortalRow.module.css";

const PortalRow = () => {
    // TODO: Status should probably come from redux or some shit not useState
    const [status, setStatus] = useState(["Inactive"]);

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
                    {`ACT001 > Company > Santa Clara (CA)`}
                </div>

                <div className={styles.mainLabel}>Carl's Jr. Consulting</div>
                <div className={styles.subLabel}>(666) 420-6969</div>
            </div>
        </div>
    );
};

export default PortalRow;
