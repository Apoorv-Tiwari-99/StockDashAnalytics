const { Signup, Login } = require("../controllers/AuthController")
const userVerification=require("../middlewares/AuthMiddleware");
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/',userVerification,(req, res) => {
    res.json({ status: true, message: "Welcome to the dashboard!", user: req.user });
    console.log("Token verification done ");
  })

module.exports = router;