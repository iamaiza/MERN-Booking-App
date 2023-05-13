const express = require("express")
const router = express.Router()
const { uploadImageByLink, uploadMediaImgFile, addPlaces } = require("../controllers/placeControllers")
const multer = require('multer')
const photoMiddleware = multer({dest: 'uploads'})

router.post("/upload-by-link", uploadImageByLink)
router.post("/upload", photoMiddleware.array('photos', 100), uploadMediaImgFile)
router.post("/places", addPlaces)

module.exports = router