const imgDownloader = require("image-downloader");
const fs = require("fs");
const Places = require("../models/placesModel.js")
const jwt = require("jsonwebtoken")

const uploadImageByLink = async (req, res) => {
    const { link } = req.body;
    const newName = "img" + Date.now() + ".jpg";
    const __dirname = process.env.__DIRNAME;
    await imgDownloader.image({
        url: link,
        dest: __dirname + "/uploads/" + newName,
    });

    res.json(newName);
};

const uploadMediaImgFile = (req, res) => {
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
        const { path, originalname } = req.files[i];

        const parts = originalname.split(".");
        const ext = parts[parts.length - 1];
        const newPath = path + "." + ext;
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace(`uploads\\`, ""));
    }

    res.json(uploadedFiles);
};

const addNewPlaces = (req, res) => {
    const {
        title,
        address,
        photos,
        description,
        perks,
        extraInfo,
        checkInTime,
        checkOutTime,
        maxGuest,
        price
    } = req.body;

    const { token } = req.cookies

    jwt.verify(token, process.env.JWT_SECRET, {}, async(err, userData) => {
        if(err) throw err

        const place = await Places.create({
            owner: userData.id,
            title, address,
            images: photos,
            description, perks, extraInfo,
            checkIn: checkInTime,
            checkOut: checkOutTime,
            maxGuest, price
        })
        res.json(place)
    })

};

const getAllPlacesOfEachUser = (req, res) => {
    const { token } = req.cookies

    jwt.verify(token, process.env.JWT_SECRET, {}, async(err, userData) => {
        const { id } = userData
        const places = await Places.find({owner: id})
        res.json(places)
    })
}

const getEachPlaceData = async(req, res) => {
    const { id } = req.params

    const place = await Places.findById(id)
    res.json(place)
}

const updateEachPlace = (req, res) => {
    const { token } = req.cookies
    const {
        id, title, address, photos,
        description, perks, extraInfo,
        checkInTime, checkOutTime, maxGuest, price } = req.body;
    jwt.verify(token, process.env.JWT_SECRET, {}, async(err, userData) => {
        const place = await Places.findById(id)
        if(userData.id === place.owner.toString()) {
            place.set({
                title, address,
                images: photos,
                description, perks, extraInfo,
                checkIn: checkInTime,
                checkOut: checkOutTime,
                maxGuest, price
            })
            place.save()
            res.json("ok")
        }
    })
}

const getAllPlaces = async (req, res) => {
    const place = await Places.find()
    res.json(place)
}

module.exports = { 
    uploadImageByLink, 
    uploadMediaImgFile, 
    addNewPlaces,
    getAllPlacesOfEachUser,
    getEachPlaceData,
    updateEachPlace,
    getAllPlaces
};
