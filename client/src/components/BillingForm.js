import React from 'react';
import EditBox from './UI/EditBox';

const BillingForm = (props) => {
    console.log(props.activeRecord)
    return (
        <>
            <EditBox fieldName={"Address 1"} keyName={"billingAddress1"} fieldData={props.activeRecord.billingAddress1} handleChange={props.handleChange} activeRecord={props.activeRecord}/>
            <EditBox fieldName={"Address 2"} keyName={"billingAddress2"}fieldData={props.activeRecord.billingAddress2} handleChange={props.handleChange}/>
            <EditBox fieldName={"City"} keyName={"billingCity" }fieldData={props.activeRecord.billingCity} handleChange={props.handleChange}/>
            <EditBox fieldName={"State"} keyName={"billingState"}fieldData={props.activeRecord.billingState} handleChange={props.handleChange} />
            <EditBox fieldName={"Postal Code"} keyName={"billingPostalCode"}fieldData={props.activeRecord.billingZipcode} handleChange={props.handleChange} />
            <EditBox fieldName={"Country"} keyName={"billingCountry"} fieldData={props.activeRecord.billingCountry}  lineBreak={false} handleChange={props.handleChange}/>
        </>
    )
}

export default BillingForm