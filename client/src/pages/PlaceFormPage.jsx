import React, { useState, Fragment } from "react";
import { Navigate } from "react-router-dom";
import "./PlaceForm.css";
import Perks from "../components/Perks";
import UploadImg from "../components/UploadImg";
import axios from "axios";
import Navigation from "../components/Navigation";

const PlaceForm = () => {
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [photos, setPhotos] = useState([]);
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkInTime, setCheckInTime] = useState("");
    const [checkOutTime, setCheckOutTime] = useState("");
    const [maxGuest, setMaxGuest] = useState(1);
    const [redirect, setRedirect] = useState(false)

    const inputTitle = (title) => <h2>{title}</h2>;
    const inputText = (text) => <p>{text}</p>;

    const preInput = (title, text) => {
        return (
            <Fragment>
                {inputTitle(title)}
                {inputText(text)}
            </Fragment>
        );
    };

    const emptyInput = (
        title === '' || address === '' || photos === [] || 
        description === '' || perks === [] || extraInfo === '' || 
        checkInTime === '' || checkOutTime === ''
    )
    const addNewPlaceHandler = async (e) => {
        e.preventDefault();

        try {

            if(emptyInput) {
                return;
            }
            await axios.post("/add-places", {
                title,
                address,
                photos,
                description,
                perks,
                extraInfo,
                checkInTime,
                checkOutTime,
                maxGuest,
            });
    
            setRedirect(true)
        } catch (error) {
            console.log(error);
        }
    };

    if(redirect && !emptyInput) {
        return <Navigate to="/account/places" />
    }

    return (
        <div>
            <Navigation />
            <form action="" className="place-form" onSubmit={addNewPlaceHandler}>
                <div>
                    {preInput(
                        "Title",
                        "Title for your place, should be short and catchy as in advertisement"
                    )}
                    <input
                        type="text"
                        placeholder="Title, for example: My lovely apartment"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    {preInput("Address", "Address to this place")}
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div>
                    {preInput("Photos", "More = Better")}
                    <UploadImg photos={photos} setPhotos={setPhotos} />
                </div>

                <div>
                    {preInput("Description", "Description of the place")}
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div>
                    {preInput("Perks", "Select all the perks of your place")}
                    <Perks perks={perks} setPerks={setPerks} />
                </div>

                <div>
                    {preInput("Extra Info.", "House rules, etc.")}
                    <textarea
                        placeholder="Extra info"
                        value={extraInfo}
                        onChange={(e) => setExtraInfo(e.target.value)}
                    />
                </div>

                <div>
                    {preInput(
                        "Check in&out times",
                        "Add check in and out times, remember to have some time window for cleaning the room between guest"
                    )}
                    <div className="grid sm:grid-cols-3 gap-3">
                        <div>
                            <h3>Check in time</h3>
                            <input
                                type="text"
                                placeholder="14:00"
                                value={checkInTime}
                                onChange={(e) => setCheckInTime(e.target.value)}
                            />
                        </div>
                        <div>
                            <h3>Check out time</h3>
                            <input
                                type="text"
                                value={checkOutTime}
                                onChange={(e) =>
                                    setCheckOutTime(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <h3>Max number of guests</h3>
                            <input
                                type="number"
                                value={maxGuest}
                                onChange={(e) => setMaxGuest(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <button className="primary my-4">Save</button>
            </form>
        </div>
    );
};

export default PlaceForm;
