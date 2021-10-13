import React from 'react';
import styles from "./MainMenuPortalRow.module.css";
import DeleteSVG from './../SVG/DeleteSVG'

const MainMenuPortalRow = () => {
    return (
        <div className={styles.mainMenuPortalRow}>

            <div className={styles.mainMenuPortalRow__deleteButton}>
                <DeleteSVG />
            </div>
        </div>
    )
}

export default MainMenuPortalRow
