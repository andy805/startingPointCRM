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

const Masterdetail = ({ masterRecords, createPath, cardClick, newAccount, find, mainLabel, changeSlides, activeSlide, user }) => {
    
    // let createPath = basePath + "accounts/create" /*passed to the createButton Component */
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
                <PushButton svgElement={<DetailViewSVG />} width={"54px"} height={"46px"} slideFunc={changeSlides} title={"DetailView"} active={false} activeSlide={activeSlide}/>
                <PushButton svgElement={<ListViewSVG />} width={"54px"} height={"46px"} slideFunc={changeSlides} title={"ListView"} active={false} activeSlide={activeSlide}/>
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
                    user= {user}
                    changeActive={cardClick}
                    masterRecords={masterRecords}
                    newRecord={newAccount}
                    path={createPath}
                />
            </div>

            {masterRecords.data.map((masterRecord, index) => (

                <PortalRow
                    className={style.PortalRow}
                    status={masterRecord.status}
                    headerLabel={masterRecord.accountInfo}
                    // mainLabel={masterRecord.accountName}
                    mainLabel={createMainLabel(masterRecord, mainLabel)}
                    phone1={masterRecord.phone1}
                    state={
                        index === masterRecords.active ? "active" : "inactive"
                    }
                    rowNumber={Number(index)}
                    cardClick={cardClickMaster}
                />
            ))}
        </div>
    )
};

/*record is an object with many key value pairs */
/*field names is an array of all the fieldnames that will be used to create 
 * the main label
 */
const createMainLabel = (record ,fieldNames) => {

    let label = "";
    for(let i = 0; i < fieldNames.length ; i++) {
        if(i !== 0){
            label = label + " " + record[fieldNames[i]];
        }
        else {
            label = record[fieldNames[i]];
        }
    }
    return label;
}

export default Masterdetail;
