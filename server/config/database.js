import Mongoose  from "mongoose";
// const Mongoose = require("mongoose");



// Mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true})

Mongoose.connect(process.env.DATABASE_URL)


// const db= Mongoose.connection

Mongoose.connection.on('connected', function(){
console.log(`Mongoose connect to: ${process.env.DATABASE_URL}`)
})
 
export default Mongoose

// module.exports = Mongoose