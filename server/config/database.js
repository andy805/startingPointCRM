const mongoose = require("mongoose")

mongoose.connect(process.env.Database_Url,{ useNewUrlParser: true, useUnifedToplogy = true})

const db= mongoose.connection

mongoose.connection.on('connected', function(){
console.log(`Mongoose connect to: ${process.env.Database_URL}`)
})
 
module.exports = mongoose