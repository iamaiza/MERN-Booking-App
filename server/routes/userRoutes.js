const express = require("express")
const router = express.Router()
const { resgisterUser, loginUser } = require("../controllers/userControllers")

router.post("/register", resgisterUser)
router.post("/login", loginUser)

module.exports = router