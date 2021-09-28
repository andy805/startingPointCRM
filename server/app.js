
//modules
import dotenv from "dotenv";
import express from "express";
import db from './config/database.js';
import cors from "cors"


//routes
import {accountRouter} from './routes/accounts.js'
// const express = require('express')

// require('dotenv').config('.env')


// const mongoose = require('./config/database')
// const Account = db.model('Account', accountSchema);


const app = express()
const port = 3000

//midleware
app.use(cors())





app.use('/accounts', accountRouter)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)

})

