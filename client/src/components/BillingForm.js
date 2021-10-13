import React from 'react';
import EditBox from './UI/EditBox';

const BillingForm = (props) => {
    console.log(props.activeRecord)
    return (
        <>
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Address 1"} keyName={"billingAddress1"} fieldData={props.activeRecord.billingAddress1} handleChange={props.handleChange}/>
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Address 2"} keyName={"billingAddress2"}fieldData={props.activeRecord.billingAddress2} handleChange={props.handleChange}/>
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"City"} keyName={"billingCity" } fieldData={props.activeRecord.billingCity} handleChange={props.handleChange}/>
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"State"} keyName={"billingState"} fieldData={props.activeRecord.billingState} handleChange={props.handleChange} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Postal Code"} keyName={"billingPostalCode"} fieldData={props.activeRecord.billingZipcode} handleChange={props.handleChange} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Country"} keyName={"billingCountry"} fieldData={props.activeRecord.billingCountry}  lineBreak={false} handleChange={props.handleChange}/>
        </>
    )
}

export default BillingForm