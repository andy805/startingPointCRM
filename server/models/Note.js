import  Mongoose  from "mongoose";
import { contactSchema, Contact } from "./Contact.js";
import { accountSchema, Account } from "./Account.js";
const Schema = Mongoose.Schema;

export const noteSchema = new Mongoose.Schema({

    _id_account: Schema.Types.ObjectId,
    _id_contact: Schema.Types.ObjectId,
    _id_project: Schema.Types.ObjectId,
    _id_product: Schema.Types.ObjectId,
    _id_invoice: Schema.Types.ObjectId,
    accounts: [{type: Schema.Types.ObjectId, ref: 'contact'}],
    contacts: [{type: Schema.Types.ObjectId, ref: 'account'}],
    name_account: String,
    name_contact: String,
    name_project: String,
    name_product: String,
    name_invoice: String,
    subject: String,
    note: String,
    note_type: String

}, {timestamps: true});

export const Note = Mongoose.model("note", noteSchema);