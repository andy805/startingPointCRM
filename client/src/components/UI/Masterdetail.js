import react, { useState } from "react";
import Card from "./Card";
import style from "./Masterdetail.module.css";
import PortalRow from "./PortalRow";

const Masterdetail = ({ masterRecords , cardClick}) => {

    // const [activeRow , setActiveRow] = useState({data: masterRecords, activeCard: 0});
    // console.log(activeRow)

    // const setActivePortalRow = (rowNumber) => {
    //     console.log(rowNumber);
    //     // setActiveRow(Number(rowNumber));

    // }

    const cardClickMaster = id => {
        cardClick(id);
    }

    return (
        <div className={style.masterDetail}>
            {masterRecords.data.map((masterRecord, index) => (
                <PortalRow
                    className={style.PortalRow}
                    status={masterRecord.status}
                    headerLabel={masterRecord.accountInfo}
                    mainLabel={masterRecord.accountName}
                    phone1={masterRecord.phone1}
                    state={index===masterRecords.active? "active" : "inactive"}
                    rowNumber={Number(index)}
                    // key={index}
                    // setPortalRowState={setActivePortalRow}
                    cardClick={cardClickMaster}
                />
            ))}
        </div>
    );
};

export default Masterdetail;
