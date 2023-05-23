import React from "react";
import  { LocationIcon } from "../icons/PlaceIcons"

const Address = ({ place }) => {
    return (
        <a
            href={`https://maps.google.com/?q=${place.address}`}
            target="_blank"
            className="font-semibold underline block my-2 flex gap-1"
        >
            <LocationIcon />
            {place.address}
        </a>
    );
};

export default Address;
