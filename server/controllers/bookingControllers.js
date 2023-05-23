const Bookings = require("../models/bookingsModel")
const jwt = require('jsonwebtoken');

const getUserDataFromReq = (req) => {
    return new Promise((res, rej) => {
        jwt.verify(req.cookies.token, process.env.JWT_SECRET, {}, async(err, userData) => {
            if(err) throw err
            res(userData)
        })
    })
}
const setPlaceBooking = async(req, res) => {
    const userData = await getUserDataFromReq(req)
    const { place, checkIn, checkOut, maxGuests, name, mobileNumber, totalPrice } = req.body

    const booking = await Bookings.create({
        place, checkIn, checkOut, name, mobileNumber, totalPrice, maxGuests,
        userId: userData.id
    })

    res.json(booking)

}

const getAllBookingsOfEachUser = async(req, res) => {
    const userData = await getUserDataFromReq(req)
    const booking = await Bookings.find({userId: userData.id}).populate('place')
    res.json(booking)
}

module.exports = { setPlaceBooking, getAllBookingsOfEachUser }