import React from 'react';
import styles from "./MainMenuPortalRow.module.css";
import DeleteSVG from './../SVG/DeleteSVG'

const MainMenuPortalRow = () => {
    return (
        <div className={styles.mainMenuPortalRow}>

            <div className={styles.mainMenuPortalRow__deleteButton}>
                <DeleteSVG />
            </div>

            <div className={styles.mainMenuPortalRow__initials}>
                LC
            </div>

            <div className={styles.mainMenuPortalRow__nameTitle}>
                <span>Chaney, Lani</span>
                <span>Supervisor (Payroll)</span>
            </div>

            <div className={styles.mainMenuPortalRow__addressPhone}>
                <span>8310 Iaculis Ave, Annapolis, MD</span>
                <span>(365) 494-3176</span>
            </div>

            <div className={styles.mainMenuPortalRow__emailButton}></div>
        </div>
    )
}

export default MainMenuPortalRow
