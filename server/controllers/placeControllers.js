const imgDownloader = require("image-downloader");
const fs = require("fs");
const Places = require("../models/placesModel.js")

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

const addPlaces = async (req, res) => {
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
    } = req.body;

    await Places.create({
        title, address,
        images: photos,
        description, perks, extraInfo,
        checkIn: checkInTime,
        checkOut: checkOutTime,
        maxGuest
    })
};

module.exports = { 
    uploadImageByLink, 
    uploadMediaImgFile, 
    addPlaces 
};
