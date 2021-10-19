
//modules
import dotenv from "dotenv";
import express from "express";
import db from './config/database.js';
import cors from "cors"
import methodOverride from "method-override"
import multer from "multer"

//routes
import {accountRouter} from './routes/accounts.js'
import {contactRouter} from './routes/contacts.js'
// const express = require('express')

// require('dotenv').config('.env')


// const mongoose = require('./config/database')
// const Account = db.model('Account', accountSchema);


const app = express()
const upload = multer()
let port = process.env.PORT;
if(port == null || port == "") {
    port = 3000;
}

//midleware
app.use(cors())
app.use(upload.none())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))



app.use('/accounts', accountRouter)
app.use('/contacts', contactRouter)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)

})

