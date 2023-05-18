const mongoose = require("mongoose")
const Schema = mongoose.Schema
const placeSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: String,
    address: String,
    images: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuest: Number,
    price: Number
})

const Places = mongoose.model("places", placeSchema)

module.exports = Places