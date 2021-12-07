
//modules
import dotenv from "dotenv";
import express from "express";
import db from './config/database.js';
import cors from "cors"
import methodOverride from "method-override"
import multer from "multer"
import cookieSession from 'cookie-session'
import passport from 'passport'
import passportConfig from "./config/passport.js";
passportConfig(passport);
//routes
import {accountRouter} from './routes/accounts.js'
import {contactRouter} from './routes/contacts.js'
// import {userRouter} from './routes/user.js'
import {authRouter} from './routes/authentication.js'


const app = express()
app.use(cookieSession({
    name: 'session-name',
  keys: ['key1', 'key2']
}))
const upload = multer()
let port = process.env.PORT;

if(port == null || port == "") {
    port = 3000;
}

//midleware
const whiteList = ['http://localhost:3001','https://accounts.google.com/o/oauth2/auth','https://starting-point-330823.web.app/'] 
app.use(cors({
  credentials:true, 
  origin:['https://starting-point-330823.web.app','http://localhost:2000'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

app.use(cookieSession({
  keys: [process.env.COOKIE_KEY],
        maxAge: 24 * 60 * 60 * 100,
        secure: true,
        httpOnly: true,
        sameSite: 'none'
}))
app.use((req, res, next)=>{
  req["sessionCookies"].secure = true;
  next();
});

app.use(passport.initialize());
app.use(passport.session());
app.use(upload.none())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))



app.use('/accounts'   , accountRouter)
app.use('/contacts', contactRouter)
// app.use('/user', userRouter)
app.use('/auth', authRouter)
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)

})

