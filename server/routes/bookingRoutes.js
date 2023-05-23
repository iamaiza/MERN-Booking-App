const express = require('express')
const router = express.Router()
const { setPlaceBooking, getAllBookingsOfEachUser } = require('../controllers/bookingControllers')

router.post('/booking', setPlaceBooking)
router.get('/all-bookings', getAllBookingsOfEachUser)
router.get('/all-bookings/bookings', getAllBookingsOfEachUser)
module.exports = router