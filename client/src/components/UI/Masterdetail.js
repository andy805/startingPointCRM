import CreateButton from "./CreateButton";
import style from "./Masterdetail.module.css";
import PortalRow from "./PortalRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import PushButton from "./PushButton";
import ListViewSVG from "../SVG/ListViewSVG";
import DetailViewSVG from "../SVG/DetailViewSVG";
import SearchBar from "./SearchBar";

const Masterdetail = ({ masterRecords, cardClick, newAccount, find }) => {
    // Dummy variables for bottom menu
    const bottomMenuData = {
        activeRecordNumber: 1,
        foundCount: 33,
        totalRecordCount: 106,
        sortState: "Unsorted",
    };

    const cardClickMaster = (id) => {
        cardClick(id);
    };

    return (
        <div className={style.masterDetail}>
            <div className={style.masterDetail__topMenu}>
                <PushButton svgElement={<DetailViewSVG />} width={"54px"} height={"46px"}/>
                <PushButton svgElement={<ListViewSVG />} width={"54px"} height={"46px"}/>
                <SearchBar width={"138px"} find={find} />
            </div>

            <div className={style.masterDetail__bottomMenu}>
                <FontAwesomeIcon icon={faCircleNotch} />
                <div className={style.masterDetail__record}>
                    {bottomMenuData.activeRecordNumber} /{" "}
                    {bottomMenuData.foundCount} Found (
                    {bottomMenuData.totalRecordCount} Total){" "}
                    {bottomMenuData.sortState}
                </div>
                <FontAwesomeIcon icon={faEllipsisH} />
                <CreateButton
                    changeActive={cardClick}
                    masterRecords={masterRecords}
                    newAccount={newAccount}
                />
            </div>

            {masterRecords.data.map((masterRecord, index) => (
                <PortalRow
                    className={style.PortalRow}
                    status={masterRecord.status}
                    headerLabel={masterRecord.accountInfo}
                    mainLabel={masterRecord.accountName}
                    phone1={masterRecord.phone1}
                    state={
                        index === masterRecords.active ? "active" : "inactive"
                    }
                    rowNumber={Number(index)}
                    cardClick={cardClickMaster}
                />
            ))}
        </div>
    );
};

export default Masterdetail;
