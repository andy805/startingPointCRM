import React from 'react';
import EditBox from './UI/EditBox';

const ShippingForm = (props) => {
    return (
        <>
            <EditBox fieldName={"Address 1"} fieldData={props.activeRecord.shippingAddress1}></EditBox>
            <EditBox fieldName={"Address 2"} fieldData={props.activeRecord.shippingAddress2}></EditBox>
            <EditBox fieldName={"City"} fieldData={props.activeRecord.shippingCity}></EditBox>
            <EditBox fieldName={"State"} fieldData={props.activeRecord.shippingState}></EditBox>
            <EditBox fieldName={"Postal Code"} fieldData={props.activeRecord.shippingZipcode}></EditBox>
            <EditBox fieldName={"Country"} fieldData={props.activeRecord.shippingCountry}></EditBox>
        </>
    )
}

export default ShippingForm