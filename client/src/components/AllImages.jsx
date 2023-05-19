import React from 'react'
import { CloseIcon } from '../icons/PlaceIcons'

const AllImages = ({ place, setShowAllImages }) => {
    const URL = import.meta.env.VITE_IMG_URL

    const closeImagesPopupHandler = e => {
        e.preventDefault()
        setShowAllImages(false)
    }

  return (
    <div className='absolute inset-0 bg-black min-h-screen'>
        <div className='px-8 md:px-20 lg:px-32 pb-12 pt-20 bg-black text-white'>
            <button className='block w-fit bg-white text-black py-1 px-8 rounded-2xl fixed left-8 top-8 flex items-center gap-1 text-xl' onClick={closeImagesPopupHandler}>
                <CloseIcon />
                Close
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