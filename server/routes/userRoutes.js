const express = require("express")
const router = express.Router()
const { resgisterUser } = require("../controllers/userControllers")

router.post("/register", resgisterUser)

module.exports = router