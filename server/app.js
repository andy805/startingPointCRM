import dotenv from "dotenv";
// dotenv.config({db: process.env.DATABASE_URL });
import express from "express";
// const dbURI = dotenv.config('.env').parsed.DATABASE_URL;
// console.log(dotenv.config('.env').parsed.DATABASE_URL);
import db from './config/database.js';

//schemas
import accountSchema from './models/accounts.js';

//routes
import {accountRouter} from './routes/accounts.js'
// const express = require('express')

// require('dotenv').config('.env')


// const mongoose = require('./config/database')
const Account = db.model('Account', accountSchema);


const app = express()
const port = 3000

const account1 = new Account ({accountName: "RCC", status:"Inactive", category:"Company", type:"Company", phone1:"123-1234-456"});
await account1.save();

app.use('/', (req, res) => {
    res.send('Hello World')
})

app.use('/accounts', accountRouter)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)

})

