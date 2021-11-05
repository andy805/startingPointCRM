import Mongoose  from "mongoose";
const Schema = Mongoose.Schema;

    const userSchema = new Schema({

         _userId: Schema.Types.ObjectId,
         userName: String,
         userEmail: String,
         googleId: String

     
     }, {timestamps: true});

export const User = Mongoose.model("user", userSchema)