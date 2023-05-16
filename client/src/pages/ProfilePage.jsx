import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from "axios"

const ProfilePage = () => {
    // const [redirect, setRedirect] = useState(null)
    const { user, isReady, setUser } = useContext(UserContext)
    let { pageId } = useParams()

    if(pageId === undefined) {
        pageId = 'profile'
    }

    const logoutHandler = async() => {
        await axios.post("/logout")
        // setRedirect('/')
        setUser(null)
    }

    if(!isReady) {
        return "Loading....."
    }
    if(isReady && !user) {
        return <Navigate to="/login" />
    }

    const navClasses = (type = null) => {
        let classes = "py-2 px-6"
        if(type === pageId) {
            classes += " bg-primary text-white rounded-full"
        }
        return classes
    }

    // if(redirect) {
    //     return <Navigate to={redirect} />
    // }

  return (
    <div>
        <nav className='w-full flex justify-center gap-2 mt-8 mb-8'>
            <Link className={navClasses('profile')} to="/account">My profile</Link>
            <Link className={navClasses('bookings')} to="/account/bookings">My bookings</Link>
            <Link className={navClasses('places')} to="/account/places">My accommodations</Link>
        </nav>

        {pageId === 'profile' && (
            <div className='text-center max-w-lg mx-auto'>
                <p>Logged in as {user.name} {user.email}</p>
                <button className='primary max-w-sm mt-2' onClick={logoutHandler}>Logout</button>
            </div>
        )}
    </div>
  )
}

export default ProfilePage
