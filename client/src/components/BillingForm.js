import React from 'react';
import EditBox from './UI/EditBox';

const BillingForm = (props) => {
    return (
        <>
            <EditBox fieldName={"Address 1"} fieldData={props.activeRecord.billingAddress1} />
            <EditBox fieldName={"Address 2"} fieldData={props.activeRecord.billingAddress2} />
            <EditBox fieldName={"City"} fieldData={props.activeRecord.billingCity} />
            <EditBox fieldName={"State"} fieldData={props.activeRecord.billingState} />
            <EditBox fieldName={"Postal Code"} fieldData={props.activeRecord.billingZipcode} />
            <EditBox fieldName={"Country"} fieldData={props.activeRecord.billingCountry} lineBreak={false}/>
        </>
    )
}

export default BillingForm