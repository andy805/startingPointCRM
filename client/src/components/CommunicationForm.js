import React from 'react';
import EditBox from './UI/EditBox';

const CommunicationForm = (props) => {
    return (
        <>
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Phone 1"} keyName={'phone1'} fieldData={props.activeRecord.phone1} handleChange={props.handleChange} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Phone 2"} keyName={'phone2'} fieldData={props.activeRecord.phone2} handleChange={props.handleChange} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Fax"} keyName={'fax'} fieldData={props.activeRecord.fax} handleChange={props.handleChange} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Email"} keyName={'email'} fieldData={props.activeRecord.email} handleChange={props.handleChange} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Website"} keyName={'Website'} fieldData={props.activeRecord.website} handleChange={props.handleChange} lineBreak={false} />
        </>
    )
}

export default CommunicationForm