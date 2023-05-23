import React, { useState } from "react";
import { ImageIcon } from "../icons/PlaceIcons";
import AllImages from "../components/AllImages";

const PlaceGallery = ({ place }) => {
    const [showAllImages, setShowAllImages] = useState(false);
    const URL = import.meta.env.VITE_IMG_URL;

    if (showAllImages) {
        return <AllImages place={place} setShowAllImages={setShowAllImages} />;
    }
    return (
        <div className="relative">
            <div className="h-full grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 rounded-3xl overflow-hidden">
                <div className="bg-gray-400 main-img">
                    <figure className="h-full">
                        {place.images?.[0] && (
                            <img
                                src={URL + place.images[0]}
                                alt=""
                                className="object-cover h-full aspect-square"
                                onClick={() => setShowAllImages(true)}
                            />
                        )}
                    </figure>
                </div>
                <div className="sub-img">
                    <figure className="">
                        {place.images?.[1] && (
                            <img
                                src={URL + place.images[1]}
                                alt=""
                                className="object-cover aspect-square"
                                onClick={() => setShowAllImages(true)}
                            />
                        )}
                    </figure>
                    <figure className="mt-2">
                        {place.images?.[2] && (
                            <img
                                src={URL + place.images[2]}
                                alt=""
                                className="object-cover aspect-square"
                                onClick={() => setShowAllImages(true)}
                            />
                        )}
                    </figure>
                </div>
            </div>
            <div
                className="absolute right-2 bottom-2 bg-white py-2 px-4 border border-black rounded-xl flex items-center gap-1 cursor-pointer"
                onClick={() => setShowAllImages(true)}
            >
                <ImageIcon />
                <button className="bg-transparent">Show all images</button>
            </div>
        </div>
    );
};

export default PlaceGallery;
