import react, { useState } from "react";
import Card from "./Card";
import style from "./Masterdetail.module.css";
import PortalRow from "./PortalRow";

const Masterdetail = ({ masterRecords }) => {
    return (
        <div className={style.masterDetail}>
            {masterRecords.map((masterRecord) => (
                <PortalRow
                    className={style.PortalRow}
                    status={masterRecord.status}
                    headerLabel={masterRecord.accountInfo}
                    mainLabel={masterRecord.accountName}
                    phone1={masterRecord.phone1}
                />
            ))}
        </div>
    );
};

export default Masterdetail;
