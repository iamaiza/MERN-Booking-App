import React from "react";

const PlacePhoto = ({ place, idx = 0 }) => {
    const URL = import.meta.env.VITE_IMG_URL
    if (!place?.images.length) return;
    return (
        <img
            src={URL + place.images[idx]}
            alt={`${place.title} images`}
            className="w-full h-full object-cover"
        />
    );
};

export default PlacePhoto;
