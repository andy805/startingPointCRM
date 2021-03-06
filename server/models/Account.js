import Mongoose  from "mongoose";
import {noteSchema, Note} from './Note.js';
import {contactSchema, Contact} from './Contact.js';
const Schema = Mongoose.Schema;

export const accountSchema = new Schema({


    // _id: Schema.Types.ObjectId,
    _userID: String,

    //this was a mistake made coming from realtional dbs we need to store account in these schemas see Principle of Least Cardinality
    notes: [{type: Schema.Types.ObjectId, ref: 'note'}],
    contacts: [{type:Schema.Types.ObjectId, ref: 'contact'}],
    
    
    accountName: String,
    category: String,
    status: String,
    phone1: String,
    phone2: String,
    fax: String,
    email: String,
    website: String,
    billingAddress1: String, 
    billingAddress2: String,
    billingCity: String,
    billingState: String,
    billingZipCode: String,
    billingCountry: String,
    shippingAddress1: String,
    shippingAddress2: String,
    shippingCity: String,
    shippingState: String,
    shippingCountry: String,
    createdBy: String,
    modifiedBy: String

}, {timestamps: true});

export const Account = Mongoose.model("account", accountSchema)