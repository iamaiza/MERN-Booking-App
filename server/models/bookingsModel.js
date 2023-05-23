const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    place: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'places'
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    totalPrice: Number,
    maxGuests: Number
})

const Bookings = mongoose.model('bookings', bookingSchema)
module.exports = Bookings