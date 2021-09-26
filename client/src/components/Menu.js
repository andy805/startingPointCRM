import React from "react";
import styles from "./Menu.module.css";
import Ellipsis from "./UI/Ellipsis";

export default function Menu(account) {
    console.log(account.account[0].accountName)

    return (
        <div className={`${styles.menu} ${"box-shadow"} ${"flex-center"}`}>
            <label>Name </label>
            <input type="text" value={account.account[0].accountName} />
            <div className={styles.menu__lineBreak} />

            <label>Type</label>
            <select>
                <option className={styles.menu__chooseOption}>Choose...</option>
            </select>
            <div className={styles.menu__lineBreak} />

            <div className={styles.menu__buttons}>
                <button>Active</button>
                <button className={styles.menu__middleButton}>Inactive</button>
                <button>Disregard</button>
            </div>
        </div>
    );
}
