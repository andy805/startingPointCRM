import react, { useState } from 'react'
import Card from './Card'
import style from './PortalRow.module.css'


const PortalRow = () => {
    const [masterRecords, setmasterRecords] = useState(['adam', 'mark', 'joe'])
    
        return(
            <div className= {style.portalRow}>
                <div className={style.status}>Active</div>
                <div className = {style.headerLabel}>this should be small text above</div>
                <div className = {style.mainLabel}>Main text</div>
                <div className = {style.subLabel}>some text underneathe</div>
            </div>
            
        )
    
    }
    
    export default PortalRow;