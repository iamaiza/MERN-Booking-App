const express = require("express")
const router = express.Router()
const { resgisterUser, loginUser, getUserProfile } = require("../controllers/userControllers")

router.post("/register", resgisterUser)
router.post("/login", loginUser)
router.get("/profile", getUserProfile)

module.exports = router