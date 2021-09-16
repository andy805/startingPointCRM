const mongoose = require("mongoose")

mongoose.connect(process.env.Database_Url,{ useNewUrlParser: true})

mongoose.connection.on('connected', fun)