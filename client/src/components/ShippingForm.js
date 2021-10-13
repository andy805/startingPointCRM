import React from 'react';
import EditBox from './UI/EditBox';

const ShippingForm = (props) => {
    return (
        <>
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Address 1"} fieldData={props.activeRecord.shippingAddress1} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Address 2"} fieldData={props.activeRecord.shippingAddress2} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"City"} fieldData={props.activeRecord.shippingCity} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"State"} fieldData={props.activeRecord.shippingState} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Postal Code"} fieldData={props.activeRecord.shippingZipcode} />
            <EditBox handleChangeClient={props.handleChangeClient} fieldName={"Country"} fieldData={props.activeRecord.shippingCountry} lineBreak={false}/>
        </>
    )
}

export default ShippingForm