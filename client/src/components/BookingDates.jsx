import React from "react";
import { format, differenceInCalendarDays } from 'date-fns'
import { CalendarIcon, NightIcon } from "../icons/BookingIcon";

const BookingDates = ({ booking, className }) => {
    return (
        <div className={`block sm:flex items-center gap-1 ${className}`}>
            <div className="flex items-center gap-1">
                <NightIcon />
                {differenceInCalendarDays(
                    new Date(booking.checkOut),
                    new Date(booking.checkIn)
                )}{" "}
                nights:
            </div>
            <div className="ml-2 mt-2 sm:mt-0 flex items-center gap-2 text-base">
                <div className="flex items-center gap-1">
                    <CalendarIcon />
                    {format(new Date(booking.checkIn), "dd-MM-yyyy")}
                </div>
                &rarr;
                <div className="flex items-center gap-1">
                    <CalendarIcon />
                    {format(new Date(booking.checkOut), "dd-MM-yyyy")}
                </div>
            </div>
        </div>
    );
};

export default BookingDates;
