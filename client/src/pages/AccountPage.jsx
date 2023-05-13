import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from "axios"
import Places from './Places'
import { BookingListIcon, PlaceIcon, UserAvatar } from '../icons/AccountPageNavIcons'

const AccountPage = () => {
    const [redirect, setRedirect] = useState(null)
    const { user, isReady, setUser } = useContext(UserContext)
    let { pageId } = useParams()

    if(pageId === undefined) {
        pageId = 'profile'
    }

    const logoutHandler = async() => {
        await axios.post("/logout")
        setRedirect('/')
        setUser(null)
    }

    if(!isReady) {
        return "Loading....."
    }
    if(isReady && !user) {
        return <Navigate to="/login" />
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

    if(redirect) {
        return <Navigate to={redirect} />
    }

  return (
    <div>
        <nav className='w-full flex justify-center gap-2 mt-8 mb-8'>
            <Link className={navClasses('profile')} to="/account">
                <UserAvatar />
                My profile
            </Link>
            <Link className={navClasses('bookings')} to="/account/bookings">
                <BookingListIcon />
                My bookings
            </Link>
            <Link className={navClasses('places')} to="/account/places">
                <PlaceIcon />
                My accommodations
            </Link>
        </nav>

        {pageId === 'profile' && (
            <div className='text-center max-w-lg mx-auto'>
                <p>Logged in as {user.name} {user.email}</p>
                <button className='primary max-w-sm mt-2' onClick={logoutHandler}>Logout</button>
            </div>
        )}
        {pageId === 'places' && <Places />}
    </div>
  )
}

export default AccountPage
