import react, { useState } from 'react'
import Card from './Card'
import styles from './PortalRow.module.css'


const PortalRow = () => {
    const [masterRecords, setmasterRecords] = useState(['adam', 'mark', 'joe',])
    
        return(
            <div className= {styles.portalRow}>
                <div className={`${styles.status} ${styles.statusActive}`}>
                <div className={styles.statusText}>Active</div>

                </div>
                <div className = {styles.headerLabel}>this should be small text above</div>
                <div className = {styles.mainLabel}>Main text</div>
                <div className = {styles.subLabel}>some text underneathe</div>
            </div>
            
        )
    
    }
    
    export default PortalRow;