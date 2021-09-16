const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({

user: {type:Schema.Types.ObjectId, ref:User},    
pk : Schema.Types.ObjectId,
notes: [{type:Schema.Types.ObjectId, ref:Note}], 
contacts: [{type:Schema.Types.ObjectId, ref:Contact}], 
accountName : String,
category : String,
status : String, 
phone1: String,
phone2: String,
fax: String,
email: String,
website: String,
billingAddress1: String,
billingAaddress2: String,
billingCity: String,
billingState: String,
shippingAddress1: String,
shippingAddress2: String,
shippingCity: String,
shippingState: String,
})