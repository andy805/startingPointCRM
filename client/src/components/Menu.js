import React from 'react'
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <div className={`${styles.menu} ${'boxshadow'} ${'flex-center'}`}>
            <label>Name</label>
            <input type="text" />

            <label>Type</label>
            <select name="" id="" placeholder="Choose..."></select>

            <div className={styles.menu__buttons}>
                <button>Active</button>
                <button className={styles.menu__middleButton}>Inactive</button>
                <button>Disregard</button>
            </div>

        </div>
    )
}
