import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Address from "../components/Address";
import PlaceGallery from "../components/PlaceGallery";
import BookingDates from "../components/BookingDates";


const BookingPage = () => {
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    useEffect(() => {
        if (id) getYourBookings();
    }, [id]);
    const getYourBookings = async () => {
        const { data } = await axios.get("/all-bookings/bookings");
        const foundBookings = data.find(({ _id }) => _id === id);
        if (foundBookings) setBooking(foundBookings);
    };

    if (!booking) {
        return '';
    }

    return (
        <div className="my-8">
            <h1 className="text-3xl font-semibold">{booking.place.title}</h1>
            <Address place={booking.place} />
            <div className="bg-gray-200 p-6 my-6 rounded-2xl block sm:flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Your bookings information</h2>
                <BookingDates booking={booking} />
              </div>
              <div className="flex flex-col w-fit bg-primary text-white p-6 rounded-2xl mt-5 sm:mt-0">
                <span>Total Price</span>
                <span className="text-3xl">${booking.totalPrice}</span>
              </div>
            </div>
            <PlaceGallery place={booking.place} />
        </div>
    );
};

export default BookingPage;
