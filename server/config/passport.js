import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose'
import {User} from '../models/User.js'


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_Client_ID,
      clientSecret: process.env.GOOGLE_CLIENT_Secret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a record with the given profile ID
          done(null, existingUser);
        } else {
          // we don't have a user record with this ID, make a new record!
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);