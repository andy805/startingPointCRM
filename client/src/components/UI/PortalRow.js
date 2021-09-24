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

            <div className={styles.headerLabel}>
                this should be small text above
            </div>

            <div className={styles.mainLabel}>Main text</div>
            <div className={styles.subLabel}>some text underneath</div>
        </div>
    );
};

export default PortalRow;
