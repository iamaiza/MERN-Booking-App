import React from "react";
import {
    WifiIcon,
    ParkingIcon,
    TVIcon,
    RadioIcon,
    PetIcon,
    EntranceIcon,
} from "../../icons/PlaceIcons";

const Perks = ({ perks, setPerks }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
            <div className="icons">
                <input type="checkbox" />
                <WifiIcon />
                <span>Wifi</span>
            </div>
            <div className="icons">
                <input type="checkbox" />
                <ParkingIcon />
                <span>Free parking spot</span>
            </div>
            <div className="icons">
                <input type="checkbox" />
                <TVIcon />
                <span>TV</span>
            </div>
            <div className="icons">
                <input type="checkbox" />
                <RadioIcon />
                <span>Radio</span>
            </div>
            <div className="icons">
                <input type="checkbox" />
                <PetIcon />
                <span>Pets</span>
            </div>
            <div className="icons">
                <input type="checkbox" />
                <EntranceIcon />
                <span>Private entrance</span>
            </div>
        </div>
    );
};

export default Perks;
