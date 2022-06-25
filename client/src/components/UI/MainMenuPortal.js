import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styles from "./MainMenuPortal.module.css";
import MainMenuPortalRow from './MainMenuPortalRow';

const MainMenuPortal = (props) => {

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
    //state
    const [portalRecords, setPortalRecords] = useState({data:[], active:0})
    const [activePortalRecord, setActivePortalRecord] = useState({})

    useEffect(() => {
      const fetchRecords = async ()=>{
          const queryID = props.activeRecord._id
          console.log('fetching docs with', queryID)
           const response = await axios.get(props.path, {params:{
            queryID: queryID}
           })
           console.log('menu portal res', response)
      }
      fetchRecords()
    }, [props.activeRecord])




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
