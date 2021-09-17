const express = require('express')

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

