import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./place.css";
import BookingForm from "../components/BookingForm";
import PlaceGallery from "../components/PlaceGallery";
import Address from "../components/Address";

const PlacePage = () => {
    const { id } = useParams();
    const [place, setPlace] = useState(null);

    useEffect(() => {
        getEachPlace();
    }, [id]);

    const getEachPlace = async () => {
        const { data } = await axios.get(`/places/${id}`);
        setPlace(data);
    };
    if (!place) return;
    return (
        <div className="-mt-1.5 bg-gray-50 px-8 pt-8 -mx-8">
            <h1 className="text-3xl font-semibold">{place.title}</h1>
            <Address place={place} />
            <PlaceGallery place={place} />

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] mt-8 gap-8">
                <div>
                    <div>
                        <h2 className="font-semibold text-2xl">Description</h2>
                        <p className="mt-2">{place.description}</p>
                    </div>
                    <div className="mt-4">
                        <p>Check in: {place.checkIn}</p>
                        <p>Check out: {place.checkOut}</p>
                        <p>Max Guest: {place.maxGuest}</p>
                    </div>
                </div>
                <BookingForm place={place} />
            </div>

            {place.extraInfo && (
                <div className="mt-8 bg-white -mx-8 p-8 border-t">
                    <h2 className="text-2xl font-semibold">Extra Info.</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        {place.extraInfo}
                    </p>
                </div>
            )}
        </div>
    );
};

export default PlacePage;
