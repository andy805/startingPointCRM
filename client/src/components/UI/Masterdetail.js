import react, { useState } from "react";
import Card from "./Card";
import style from "./Masterdetail.module.css";
import PortalRow from "./PortalRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";


const Masterdetail = ({ masterRecords , cardClick}) => {

    // Dummy variables for bottom menu
    const bottomMenuData = {
        activeRecordNumber: 1,
        foundCount: 33,
        totalRecordCount: 106,
        sortState: "Unsorted",
    }

    const cardClickMaster = id => {
        cardClick(id);
    }

    return (
        <div className={style.masterDetail}>
            
            <div className={style.masterDetail__bottomMenu}>
                <FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon>
                <div className={style.masterDetail__record}>
                  {bottomMenuData.activeRecordNumber} / {bottomMenuData.foundCount} Found ({bottomMenuData.totalRecordCount} Total) {bottomMenuData.sortState}
                </div>
                <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </div>

            {masterRecords.data.map((masterRecord, index) => (
                <PortalRow
                    className={style.PortalRow}
                    status={masterRecord.status}
                    headerLabel={masterRecord.accountInfo}
                    mainLabel={masterRecord.accountName}
                    phone1={masterRecord.phone1}
                    state={index===masterRecords.active? "active" : "inactive"}
                    rowNumber={Number(index)}
                    cardClick={cardClickMaster}
                />
            ))}
        </div>
    );
};

export default Masterdetail;
