import React from "react";
import styles from "./MainMenuPortalRow.module.css";
import DeleteSVG from "./../SVG/DeleteSVG";
import MailSVG from "../SVG/MailSVG";
import ChevronRightSVG from "../SVG/ChevronRightSVG";

const MainMenuPortalRow = (props) => {
    return (
        <div className={styles.mainMenuPortalRow}>
            <div className={styles.mainMenuPortalRow__deleteButton}>
                <DeleteSVG />
            </div>

            <div className={styles.mainMenuPortalRow__initials}>{props.rightLabelTwo[0]}{props.rightLabelOne[0]}</div>

            <div className={styles.mainMenuPortalRow__nameTitle}>
                <span>{props.rightLabelOne}, {props.rightLabelTwo}</span>
                <span>{props.position}</span>
            </div>

            <div className={styles.mainMenuPortalRow__addressPhone}>
                <span>{props.leftLabel}</span>
                <span>{props.leftSubLabel}</span>
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
