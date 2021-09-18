import react, { useState } from 'react'
import Card from './Card'
import style from './Masterdetail.module.css'

const Masterdetail = () => {
const [masterRecords, setmasterRecords] = useState(['adam', 'mark', 'joe'])

    return(
        <div className={style.masterDetail}>
            <ul>
            {masterRecords.map(masterRecord => (
        <li key={masterRecord}>{masterRecord}</li>
      ))}
            </ul>
        </div>
    )

}

export default Masterdetail;
