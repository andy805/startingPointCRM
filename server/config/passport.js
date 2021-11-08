import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose'
import {User} from '../models/User.js'



passport.serializeUser((user, done)=> {
    done(null, user._userId);
   });

   passport.deserializeUser(function(user, done) {
    done(null, user);
   });

passport.use(
    new GoogleStrategy(
     {
      clientID: '500461040639-pk88u5ga6vttpfam2gjonmjd0dh62ogi.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
     },
     function(accessToken, refreshToken, profile, done) {
        User.findOne({googleID: profile.id}).then(existingUser=>{
            if (existingUser){
                done(null, existingUser)

            }else{
                new User({
                    googleId: profile.id,
                    userEmail: profile.emails[0].value,
                    userName: profile.displayName
                }).save().then(user=>(done, user))
            }
        })
     }
    )
   );
   const signIn = (req, res) =>{
    console.log(req)
    console.log('hit signin')
    res.json({hello: 'hi'})
    }
    
export {signIn}