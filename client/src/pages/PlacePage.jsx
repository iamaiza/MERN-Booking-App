import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageIcon, LocationIcon } from "../icons/PlaceIcons";
import AllImages from "../components/AllImages";
import "./place.css"

const PlacePage = () => {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    const [showAllImages, setShowAllImages] = useState(false)
    const URL = import.meta.env.VITE_IMG_URL;

    useEffect(() => {
        getEachPlace();
    }, [id]);

    const getEachPlace = async () => {
        const { data } = await axios.get(`/places/${id}`);
        setPlace(data);
    };
    if (!place) return;

    if(showAllImages) {
        return <AllImages place={place} setShowAllImages={setShowAllImages} />
    }

    return (
        <div className="-mt-1.5 bg-gray-50 p-8 -mx-8">
            <h1 className="text-3xl font-semibold">{place.title}</h1>
            <a
                href={`https://maps.google.com/?q=${place.address}`}
                target="_blank"
                className="font-semibold underline block my-2 flex gap-1"
            >
                <LocationIcon />
                {place.address}
            </a>
            <div className="relative">
                <div className="h-full grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-2 rounded-3xl overflow-hidden">
                    <div className="bg-gray-400 main-img">
                        <figure className="h-full">
                            {place.images?.[0] && (
                                <img src={URL + place.images[0]} alt="" className="object-cover h-full aspect-square" />
                            )}
                        </figure>
                    </div>
                    <div className="sub-img">
                        <figure className="">
                            {place.images?.[1] && (
                                <img src={URL + place.images[1]} alt="" className="object-cover aspect-square" />
                            )}
                        </figure>
                        <figure className="mt-2">
                            {place.images?.[2] && (
                                <img src={URL + place.images[2]} alt="" className="object-cover aspect-square" />
                            )}
                        </figure>
                    </div>
                </div>
                <div className="absolute right-2 bottom-2 bg-white py-2 px-4 border border-black rounded-xl flex items-center gap-1 cursor-pointer" onClick={() => setShowAllImages(true)}>
                    <ImageIcon />
                    <button className="bg-transparent">Show all images</button>
                </div>
            </div>
        </div>
    );
};

export default PlacePage;
