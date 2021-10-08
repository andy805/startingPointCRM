import Mongoose, { Mongoose } from "mongoose"
const Schema = Mongoose.Schema

const contactSchema = new Schema({
    _idContact = Schema.Types.ObjectId,

    firstName:String
})