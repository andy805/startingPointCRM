import React from "react";
import styles from "./MainMenuPortalRow.module.css";
import DeleteSVG from "./../SVG/DeleteSVG";
import MailSVG from "../SVG/MailSVG";
import ChevronRightSVG from "../SVG/ChevronRightSVG";

const MainMenuPortalRow = ({firstName, lastName, position, address, phone}) => {
    return (
        <div className={styles.mainMenuPortalRow}>
            <div className={styles.mainMenuPortalRow__deleteButton}>
                <DeleteSVG />
            </div>

            <div className={styles.mainMenuPortalRow__initials}>{firstName[0]}{lastName[0]}</div>

            <div className={styles.mainMenuPortalRow__nameTitle}>
                <span>{lastName}, {firstName}</span>
                <span>{position}</span>
            </div>

            <div className={styles.mainMenuPortalRow__addressPhone}>
                <span>{address}</span>
                <span>{phone}</span>
            </div>

            <div className={styles.mainMenuPortalRow__emailButton}>
                <MailSVG />
            </div>

            <div className={styles.mainMenuPortalRow__chevronRight}>
                <ChevronRightSVG />
            </div>
        </div>
    );
};

export default MainMenuPortalRow;
