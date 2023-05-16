const express = require("express")
const router = express.Router()
const { uploadImageByLink, uploadMediaImgFile, addNewPlaces, getAllPlaces } = require("../controllers/placeControllers")
const multer = require('multer')
const photoMiddleware = multer({dest: 'uploads'})

router.post("/upload-by-link", uploadImageByLink)
router.post("/upload", photoMiddleware.array('photos', 100), uploadMediaImgFile)
router.post("/add-places", addNewPlaces)
router.get("/places", getAllPlaces)

module.exports = router