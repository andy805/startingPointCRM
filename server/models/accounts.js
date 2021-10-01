import Mongoose  from "mongoose";
const Schema = Mongoose.Schema;

const accountSchema = new Schema({

   // user: { type: Schema.Types.ObjectId, ref: User },
    pk: Schema.Types.ObjectId,
   // notes: [{ type: Schema.Types.ObjectId, ref: Note }],
  //  contacts: [{ type: Schema.Types.ObjectId, ref: Contact }],
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
    billingZipcode: String,
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