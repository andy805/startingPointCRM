import Mongoose from "mongoose"
import { Note, noteSchema } from "./Note.js";
import {accountSchema, Account} from './Account.js';
import {userSchema, User} from './User.js'

const Schema = Mongoose.Schema

export const contactSchema = new Schema({
    _idContact: Schema.Types.ObjectId,
    /*ref has to point to the model name*/
    account: {type:Schema.Types.ObjectId , ref: 'account'},//[accountSchema]
    user:{type:Schema.Types.ObjectId, ref:'user'},
    firstName:String,
    lastName:String,
    category: String,
    status: String,
    phone1:String,
    phone2:String,
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
} , {timestamps: true});

export const Contact = Mongoose.model("contact", contactSchema);