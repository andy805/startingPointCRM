const express = require('express')
require('dotenv').config('.env')

const mongoose = require('./config/database')
const app= express()
const port =3000
1

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
console.log(`app listening at http://lochost:${port}`)

}) 

