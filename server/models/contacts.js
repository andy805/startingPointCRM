import Mongoose from "mongoose"
import {Account} from "./accounts.js";
const Schema = Mongoose.Schema

const contactSchema = new Schema({
    _idContact: Schema.Types.ObjectId,
    _idAccount: {type: Schema.Types.ObjectId, ref:Account},
    firstName:String,
    lastName:String,
    phone1:String,
    phone2:String,
    email: String,



})

export const Contact = Mongoose.model("contact", contactSchema)