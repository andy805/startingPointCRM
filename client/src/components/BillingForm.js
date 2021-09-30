import React from 'react';
import EditBox from './UI/EditBox';

const BillingForm = (props) => {
    return (
        <>
            <EditBox fieldName={"Address 1"} fieldData={props.activeRecord.billingAddress1}></EditBox>
            <EditBox fieldName={"Address 2"} fieldData={props.activeRecord.billingAddress2}></EditBox>
            <EditBox fieldName={"City"} fieldData={props.activeRecord.billingCity}></EditBox>
            <EditBox fieldName={"State"} fieldData={props.activeRecord.billingState}></EditBox>
            <EditBox fieldName={"Postal Code"} fieldData={props.activeRecord.billingZipcode}></EditBox>
            <EditBox fieldName={"Country"} fieldData={props.activeRecord.billingCountry}></EditBox>
        </>
    )
}

export default BillingForm