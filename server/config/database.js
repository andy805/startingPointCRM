const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true})

const db= mongoose.connection

mongoose.connection.on('connected', function(){
console.log(`Mongoose connect to: ${process.env.DATABASE_URL}`)
})
 
module.exports = mongoose