import React from 'react';
import EditBox from './UI/EditBox';

const ShippingForm = (props) => {
    return (
        <>
            <EditBox fieldName={"Address 1"} fieldData={props.activeRecord.shippingAddress1} />
            <EditBox fieldName={"Address 2"} fieldData={props.activeRecord.shippingAddress2} />
            <EditBox fieldName={"City"} fieldData={props.activeRecord.shippingCity} />
            <EditBox fieldName={"State"} fieldData={props.activeRecord.shippingState} />
            <EditBox fieldName={"Postal Code"} fieldData={props.activeRecord.shippingZipcode} />
            <EditBox fieldName={"Country"} fieldData={props.activeRecord.shippingCountry} lineBreak={false}/>
        </>
    )
}

export default ShippingForm