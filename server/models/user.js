import Mongoose  from "mongoose";

const Schema = Mongoose.Schema;

export  const userSchema = new Schema({

        _userId: Schema.Types.ObjectId,
        userName: String,
        userEmail: String,
        googleId: String,
        secret: String,
        image: String
            
     
     }, {timestamps: true});

export const User = Mongoose.model("user", userSchema)