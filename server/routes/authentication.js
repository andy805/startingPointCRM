import express from "express";
import passport  from "passport"
const router = express.Router()
import {signIn} from "../config/passport.js"

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', {
    scope:['profile', 'email']
}))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback', passport.authenticate('google')
)

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

export {router as authRouter}