import React from 'react'
import { CloseIcon } from '../icons/PlaceIcons'

const AllImages = ({ place, setShowAllImages }) => {
    const URL = import.meta.env.VITE_IMG_URL

    const closeImagesPopupHandler = e => {
        e.preventDefault()
        setShowAllImages(false)
    }

  return (
    <div className='absolute inset-0 bg-white min-h-screen'>
        <div className='px-8 pb-12 pt-28 bg-black text-white'>
            <button className='block w-fit bg-transparent fixed left-8 top-8 ' onClick={closeImagesPopupHandler}>
                <CloseIcon />
            </button>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {place?.images?.length > 0 && place.images.map((img, idx) => (
                    <div className='' key={img}>
                        <img className='object-cover aspect-square' src={URL + img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllImages