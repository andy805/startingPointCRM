import express from "express";
import passport  from "passport"
const router = express.Router()


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

router.get('/api/current_user', (req,res)=>{
    res.json(req)
})

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})


export {router as authRouter}