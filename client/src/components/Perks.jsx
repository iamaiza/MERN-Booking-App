import React from "react";
import {
    WifiIcon,
    ParkingIcon,
    TVIcon,
    RadioIcon,
    PetIcon,
    EntranceIcon,
} from "../icons/PlaceIcons";

const Perks = ({ perks, setPerks }) => {
    const checkboxClickHandler = (e) => {
        const { name, checked } = e.target;

        if (checked) {
            setPerks([...perks, name]);
        } else {
            setPerks([...perks.filter((checkedName) => checkedName !== name)]);
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
            <div className="icons">
                <input
                    type="checkbox"
                    name="wifi"
                    onChange={checkboxClickHandler}
                />
                <WifiIcon />
                <span>Wifi</span>
            </div>
            <div className="icons">
                <input
                    type="checkbox"
                    name="parking"
                    onChange={checkboxClickHandler}
                />
                <ParkingIcon />
                <span>Free parking spot</span>
            </div>
            <div className="icons">
                <input
                    type="checkbox"
                    name="tv"
                    onChange={checkboxClickHandler}
                />
                <TVIcon />
                <span>TV</span>
            </div>
            <div className="icons">
                <input
                    type="checkbox"
                    name="radio"
                    onChange={checkboxClickHandler}
                />
                <RadioIcon />
                <span>Radio</span>
            </div>
            <div className="icons">
                <input
                    type="checkbox"
                    name="pets"
                    onChange={checkboxClickHandler}
                />
                <PetIcon />
                <span>Pets</span>
            </div>
            <div className="icons">
                <input
                    type="checkbox"
                    name="entrance"
                    onChange={checkboxClickHandler}
                />
                <EntranceIcon />
                <span>Private entrance</span>
            </div>
        </div>
    );
};

export default Perks;
