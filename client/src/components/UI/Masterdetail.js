import react, { useState } from "react";
import Card from "./Card";
import style from "./Masterdetail.module.css";
import PortalRow from "./PortalRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateButton from './CreateButton'

const Masterdetail = ({ masterRecords , cardClick, newAccount,  }) => {

    const cardClickMaster = id => {
        cardClick(id);
    }

    return (
        <div className={style.masterDetail}>
            
            {/* This class name could be better, let me know if you have suggestions */}
            <div className={style.masterDetail__buttons}>
              <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
              
              <CreateButton changeActive={cardClick} masterRecords={masterRecords} newAccount={newAccount}/>
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
