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
  '/google/callback', passport.authenticate('google',
  {
    successRedirect: "https://starting-point-330823.web.app/",
    failureRedirect: "/auth/login/failed"
   })
)

router.get('/login/success', (req,res)=>{
  if (req.user) {
      res.json({
       message : "User Authenticated",
      user : req.user
     })
  }
  else res.status(400).json({
    message : "User Not Authenticated",
   user : null
 })
});

router.get('/api/current_user', (req,res)=>{
    console.log(req.headers)
    console.log(req.user)
    res.json(req.user)
})

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})


export {router as authRouter}