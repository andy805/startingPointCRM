import { Mongoose } from "mongoose";
const Schema = Mongoose.Schema;

export const notesSchema = new Schema({

    _id_account: Schema.Types.ObjectId,
    _id_contact: Schema.Types.ObjectId,
    _id_project: Schema.Types.ObjectId,
    _id_product: Schema.Types.ObjectId,
    _id_invoice: Schema.Types.ObjectId,
    name_account: String,
    name_contact: String,
    name_project: String,
    name_product: String,
    name_invoice: String,
    subject: String,
    note: String,
    note_type: String

});

export const Notes = Mongoose.model("note", notesSchema);