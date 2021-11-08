import Mongoose from "mongoose"
import { Note, noteSchema } from "./Note.js";
import {accountSchema, Account} from './Account.js';
const Schema = Mongoose.Schema

export const contactSchema = new Schema({
    _idContact: Schema.Types.ObjectId,
    /*ref has to point to the model name*/
    notes: [{type:Schema.Types.ObjectId, ref:'note'}],
    account: {type:Schema.Types.ObjectId , ref: 'account'},//[accountSchema]
    firstName:String,
    lastName:String,
    phone1:String,
    phone2:String,
    email: String
} , {timestamps: true});

export const Contact = Mongoose.model("contact", contactSchema);