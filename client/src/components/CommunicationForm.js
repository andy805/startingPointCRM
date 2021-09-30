import React from 'react';
import EditBox from './UI/EditBox';

const CommunicationForm = (props) => {
    return (
        <>
            <EditBox fieldName={"Phone 1"} fieldData={props.activeRecord.phone1}></EditBox>
            <EditBox fieldName={"Phone 2"} fieldData={props.activeRecord.phone2}></EditBox>
            <EditBox fieldName={"Fax"} fieldData={props.activeRecord.fax}></EditBox>
            <EditBox fieldName={"Email"} fieldData={props.activeRecord.email}></EditBox>
            <EditBox fieldName={"Website"} fieldData={props.activeRecord.website}></EditBox>
        </>
    )
}

export default CommunicationForm