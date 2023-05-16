import React from 'react'
import { Link } from "react-router-dom"

const Places = ({ place }) => {
  return (
    <Link to={`/account/places/${place._id}`} className='bg-gray-100 p-4 rounded-2xl flex gap-4'>

        <figure className='w-32 h-32 bg-gray-300 shrink-0'>
            {place.images.length > 0 && (
                <img src={place.images[0]} alt={`${place.title} images`} className='w-full h-full object-cover' />
            )}
        </figure>

        <div>
            <h1>{place.title}</h1>
            <p>{place.description}</p>
        </div>
    </Link>
  )
}

export default Places