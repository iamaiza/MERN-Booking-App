import React from "react";
import { Link, useLocation } from "react-router-dom"
import { BookingListIcon, PlaceIcon, UserAvatar } from '../icons/AccountPageNavIcons'

const Navigation = () => {
    const { pathname } = useLocation()
    let pageId = pathname.split("/")[2]

    if(pageId === undefined) {
        pageId = 'profile'
    }
    
    const navClasses = (type = null) => {
        let classes = "inline-flex items-center gap-1 py-2 px-6 rounded-full"
        if(type === pageId) {
            classes += " bg-primary text-white"
        } else {
            classes += " bg-gray-200"
        }
        return classes
    }

    return (
        <nav className="w-full flex justify-center flex-wrap gap-2 mt-8 mb-8">
            <Link className={navClasses("profile")} to="/account">
                <UserAvatar />
                My profile
            </Link>
            <Link className={navClasses("bookings")} to="/account/bookings">
                <BookingListIcon />
                My bookings
            </Link>
            <Link className={navClasses("places")} to="/account/places">
                <PlaceIcon />
                My accommodations
            </Link>
        </nav>
    );
};

export default Navigation;
