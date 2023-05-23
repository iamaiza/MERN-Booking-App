import React, { useState, useEffect, useContext } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from 'axios'
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const BookingForm = ({ place }) => {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuests, setMaxGuests] = useState(1);
    const [name, setName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [redirect, setRedirect] = useState('')
    const { user } = useContext(UserContext)

    useEffect(() => {
        setName(user?.name)
    }, [])

    let numberOfNights = 0

    if(checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
    }
    const totalPrice = numberOfNights * place.price

    const placeBookingHandler = async(e) => {
        e.preventDefault()
        const { data } = await axios.post('/booking', {
            name, mobileNumber, maxGuests, checkIn, checkOut, totalPrice,
            place: place._id
        })

        setRedirect(`/account/bookings/${data._id}`)
    }

    if(redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className="bg-white shadow p-4 rounded-2xl">
            <div className="text-xl font-semibold text-center">
                Price: ${place.price} / per night
            </div>
            <div className="border rounded-2xl my-4">
                <div className="block sm:flex">
                    <div className="flex-1 py-3 px-4 border-r">
                        <label htmlFor="">Check-in</label>
                        <input
                            type="date"
                            className="block w-full"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 py-3 px-4 border-t sm:border-t-0">
                        <label htmlFor="">Check-out</label>
                        <input
                            type="date"
                            className="block w-full"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                        />
                    </div>
                </div>
                <div className="py-2 px-4 border-t">
                    <label htmlFor="">Guest</label>
                    <input
                        type="number"
                        className="block w-full"
                        value={maxGuests}
                        onChange={(e) => setMaxGuests(e.target.value)}
                    />
                </div>

                {numberOfNights > 0 && (
                    <>
                        <div className="py-2 px-4">
                            <label htmlFor="">Full Name</label>
                            <input
                                type="text"
                                className="block w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="py-2 px-4">
                            <label htmlFor="">Phone</label>
                            <input
                                type="tel"
                                className="block w-full"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                        </div>
                    </>
                )}
            </div>

            <button className="primary" onClick={placeBookingHandler}>Book the place now</button>

            {/* {numberOfNights > 0 && (
                <div className="flex justify-between items-center my-4 pb-4 border-b">
                    <p className="text-gray-800 underline">{'$' + place.price +' x '+ numberOfNights + ' nights'}</p>
                    <p className="text-gray-800">${totalPrice}</p>
                </div>
            )}
            <div className="flex items-center justify-between">
                <p className="font-semibold text-lg text-gray-900">Total before taxes</p>
                <p className="text-gray-900 font-semibold">${totalPrice}</p>
            </div> */}
        </div>
    );
};

export default BookingForm;
