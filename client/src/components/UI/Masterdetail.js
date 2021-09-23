import react, { useState } from 'react'
import Card from './Card'
import style from './Masterdetail.module.css'
import PortalRow from './PortalRow'

const Masterdetail = () => {
const [masterRecords, setmasterRecords] = useState(['adam', 'mark', 'joe','adam', 'mark', 'joe','joe','joe','joe','joe','joe','joe','joe','joe','joe','joe'])

    return(
        <div className={style.masterDetail}>
            {masterRecords.map(masterRecord => (
        <PortalRow className={style.PortalRow}/>
      ))}

        </div>
    )

}

export default Masterdetail;
