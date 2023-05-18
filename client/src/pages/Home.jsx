import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  const [places, setPlaces] = useState([])
  const URL = import.meta.env.VITE_IMG_URL

  useEffect(() => {
    getAllPlaces()
  }, [])
  const getAllPlaces = async() => {
    const { data } = await axios.get("/places") 
    setPlaces(data)
  }
  return (
    <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-12'>
      {places.length > 0 && places.map(place => (
        <Link to={`/place/${place._id}`} key={place._id}>
          <div className='flex bg-gray-600 rounded-2xl mb-2'>
            {place.images.length > 0 && (
              <img src={URL + place.images[0]} alt="" className='rounded-2xl object-cover aspect-square w-full h-full' />
            )}
          </div>
          <h3 className='font-bold text-lg truncate'>{place.address}</h3>
          <h2 className='text-sm text-gray-500'>{place.title}</h2>
          <div>${place.price} night</div>
        </Link>
      ))}
    </div>
  )
}

export default Home