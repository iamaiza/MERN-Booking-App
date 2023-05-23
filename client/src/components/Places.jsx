import React from 'react'
import { Link } from "react-router-dom"
import PlacePhoto from "./PlacePhoto"

const Places = ({ place }) => {
  
  return (
    <Link to={`/account/places/${place._id}`} className='bg-gray-100 p-4 rounded-2xl block sm:flex gap-4 mt-4'>

        <figure className='w-full h-full sm:w-32 sm:h-32 bg-gray-300 shrink-0'>
            <PlacePhoto place={place} />
        </figure>

        <div className='mt-3 sm:mt-0'>
            <h1 className='font-semibold text-xl'>{place.title}</h1>
            <p className='text-sm mt-2'>{place.description}</p>
        </div>
    </Link>
  )
}

export default Places