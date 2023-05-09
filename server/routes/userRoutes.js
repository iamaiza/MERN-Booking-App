const express = require("express")
const router = express.Router()
const { resgisterUser, loginUser, getUserProfile, userLogout } = require("../controllers/userControllers")

router.post("/register", resgisterUser)
router.post("/login", loginUser)
router.get("/profile", getUserProfile)
router.post("/logout", userLogout)

module.exports = router