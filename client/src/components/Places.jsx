import React from 'react'
import { Link } from "react-router-dom"

const Places = ({ place }) => {
  const URL = import.meta.env.VITE_IMG_URL
  return (
    <Link to={`/account/places/${place._id}`} className='bg-gray-100 p-4 rounded-2xl flex gap-4 mt-4'>

        <figure className='w-32 h-32 bg-gray-300 shrink-0'>
            {place.images.length > 0 && (
                <img src={URL + place.images[0]} alt={`${place.title} images`} className='w-full h-full object-cover' />
            )}
        </figure>

        <div>
            <h1 className='font-semibold text-xl'>{place.title}</h1>
            <p className='text-sm mt-2'>{place.description}</p>
        </div>
    </Link>
  )
}

export default Places