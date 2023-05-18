const express = require("express")
const router = express.Router()
const { uploadImageByLink, uploadMediaImgFile, addNewPlaces, getAllPlacesOfEachUser, getEachPlaceData, updateEachPlace, getAllPlaces } = require("../controllers/placeControllers")
const multer = require('multer')
const photoMiddleware = multer({dest: 'uploads'})

router.post("/upload-by-link", uploadImageByLink)
router.post("/upload", photoMiddleware.array('photos', 100), uploadMediaImgFile)
router.post("/add-places", addNewPlaces)
router.get("/user-places", getAllPlacesOfEachUser)
router.get("/places/:id", getEachPlaceData)
router.put("/places/updatePlace", updateEachPlace)
router.get("/places", getAllPlaces)

module.exports = router