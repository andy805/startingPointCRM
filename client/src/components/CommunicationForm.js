import React from 'react';
import EditBox from './UI/EditBox';

const CommunicationForm = (props) => {
    return (
        <>
            <EditBox fieldName={"Phone 1"} keyName={'phone1'}fieldData={props.activeRecord.phone1}/>
            <EditBox fieldName={"Phone 2"} keyName={'phone2' } fieldData={props.activeRecord.phone2}/>
            <EditBox fieldName={"Fax"} keyName={'fax'} fieldData={props.activeRecord.fax}/>
            <EditBox fieldName={"Email"} keyName={'email'}fieldData={props.activeRecord.email}/>
            <EditBox fieldName={"Website"} keyName={'Website'}fieldData={props.activeRecord.website} lineBreak={false}/>
        </>
    )
}

export default CommunicationForm