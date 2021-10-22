import React from 'react'
import styles from "./MainMenuPortal.module.css";
import MainMenuPortalRow from './MainMenuPortalRow';

const MainMenuPortal = () => {

    const sampleData = [
        {
            firstName: "Lani",
            lastName: "Chaney",
            position: "Supervisor (Payroll)",
            address: "8310 Iaculis Ave, Annapolis, MD",
            phone: "(365) 494-3176"
        },
        {
            firstName: "Chuck",
            lastName: "Norris",
            position: "CEO",
            address: "320 Dank Ave, Provo Utah",
            phone: "(458) 777-0123"
        }
    ]

    return (
        <div className={styles.mainMenuPortal}>
            {sampleData.map(element =>
                <MainMenuPortalRow
                    firstName={element.firstName}
                    lastName={element.lastName}
                    position={element.position}
                    address={element.address}
                    phone={element.phone}
                />
            )}
        </div>
    )
}

export default MainMenuPortal
