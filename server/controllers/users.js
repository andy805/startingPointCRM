import  Mongoose  from 'mongoose'
import { User } from '../models/User.js'

const index = (req, res) => {
    console.log(req)
    User.find({}, (err, users) => {
        if (err) {
            return err
        } else {
            res.json(
                users
            )
        }
    })
}

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));


// export {index}