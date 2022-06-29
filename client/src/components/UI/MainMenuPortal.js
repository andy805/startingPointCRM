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

    const addRecords=(records)=>{
        setPortalRecords(prevState =>({
            ...prevState, data:[ ...records]
        }))
    }
    useEffect(() => {
      const fetchRecords = async ()=>{
          const queryID = props.activeRecord._id
          console.log('fetching docs with', queryID)
           const response = await axios.get(props.path, {params:{
               masterTable:props.masterTable,
            queryID: queryID}
           })
           console.log('menu portal res', response)
           addRecords(response.data)
           console.log("checking portal records state ", portalRecords)
      }
      fetchRecords()
    }, [props.activeRecord])




    return (
        <div className={styles.mainMenuPortal}>
            {portalRecords.data.map(element =>
                <MainMenuPortalRow
                    
                rightLabelOne={element.firstName}
                rightLabelTwo={element.lastName}
                rightSubLabel={element.position}
                leftLabel={element.address}
                leftSubLabel={element.phone}
                />
            )}
        </div>
    )
}

export default MainMenuPortal
