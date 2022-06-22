import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose'
import {User} from '../models/User.js'


export default (passport)=>{ passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
     

      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a record with the given profile ID
          done(null, existingUser);
        } else {
          // we don't have a user record with this ID, make a new record!
          new User({ 
            googleId: profile.id,
            userEmail: profile.emails[0].value,
            userName: profile.displayName  
          }
            
            )
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

}