import React, { useEffect, useState, useContext } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import PlacePhoto from "../components/PlacePhoto";
import { CreditCardIcon } from "../icons/BookingIcon";
import { Link } from "react-router-dom";
import BookingDates from "../components/BookingDates";
import { UserContext } from "../Context/UserContext";

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(UserContext)
    useEffect(() => {
        getAllBookings();
    }, []);
    const getAllBookings = async () => {
        const { data } = await axios.get("/all-bookings");
        setBookings(data);
    };

    return (
      <div>
        <Navigation />

        {bookings?.length > 0 ?
          bookings.map((booking) => (
            <Link to={`/account/bookings/${booking._id}`} key={booking._id} className="bg-gray-200 block sm:flex gap-4 overflow-hidden rounded-2xl">
              <figure className="w-full sm:w-56">
                <PlacePhoto place={booking.place} />
              </figure>
              <div className="py-3 grow pr-3">
                <h2 className="text-xl font-semibold">{booking.place.title}</h2>
                
                <div className="text-xl">
                  <BookingDates booking={booking} className="mb-3 mt-4 text-gray-500" />
                  <div className="flex items-center gap-1 text-2xl font-semibold">
                    <CreditCardIcon />
                    Total price: ${booking.totalPrice}
                  </div>
                </div>
              </div>
            </Link>
          )) : (
            <div className="font-semibold text-2xl text-center mt-5">
              You've no bookings yet.
            </div>
          )}
      </div>
    );
};

export default BookingsPage;
