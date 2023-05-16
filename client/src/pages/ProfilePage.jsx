import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { Navigate, useParams } from 'react-router-dom'
import axios from "axios"
import Navigation from '../components/Navigation'
import PlacesPage from './PlacesPage'

const ProfilePage = () => {
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


    if(redirect) {
        return <Navigate to={redirect} />
    }

  return (
    <div>
        <Navigation />

        {pageId === 'profile' && (
            <div className='text-center max-w-lg mx-auto'>
                <p>Logged in as <span className='font-bold'>{user.name}</span></p>
                <p>Email: <span className='font-bold'>{user.email}</span></p>
                <button className='primary max-w-sm mt-2' onClick={logoutHandler}>Logout</button>
            </div>
        )}
        {pageId === 'places' && <PlacesPage />}
    </div>
  )
}

export default ProfilePage
