import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PlaceForm.css";
import { UploadIcon } from "../../icons/PlaceIcons";
import Perks from "./Perks";

const PlaceForm = () => {
    const URL = import.meta.env.VITE_IMG_URL;
    const { action } = useParams();
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [photo, setPhoto] = useState("");
    const [photos, setPhotos] = useState([]);
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkInTime, setCheckInTime] = useState("");
    const [checkOutTime, setCheckOutTime] = useState("");
    const [maxGuest, setMaxGuest] = useState("");

    const inputTitle = (title) => <h2>{title}</h2>;
    const inputText = (text) => <p>{text}</p>;

    const preInput = (title, text) => {
        return (
            <>
                {inputTitle(title)}
                {inputText(text)}
            </>
        );
    };

    const addPhotoHandler = async (e) => {
        e.preventDefault();

        const { data: filename } = await axios.post("/upload-by-link", {
            link: photo,
        });
        setPhotos((prev) => {
            return [...prev, filename];
        });
        setPhoto("");
    };

    const uploadPhotoHandler = async(e) => {
        const files = e.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append("photos", files[i]);
        }
        const { data: filenames } = await axios
            .post("/upload", data, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            setPhotos((pre) => {
                return [...pre, ...filenames];
            })
    };

    return (
        <div>
            <form action="" className="place-form">
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
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Add using link ....jpg"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                        />
                        <button
                            className="bg-gray-200 px-5 rounded-2xl"
                            onClick={addPhotoHandler}
                        >
                            Add&nbsp;photo
                        </button>
                    </div>
                    <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        {photos.length > 0 &&
                            photos.map((link) => (
                                <div key={link} className="h-32 flex">
                                    <img
                                        className="rounded-2xl w-full object-cover"
                                        src={ URL + link }
                                        alt=""
                                    />
                                </div>
                            ))}

                        <label className="h-32 flex justify-center items-center gap-1 border bg-transparent cursor-pointer p-2 rounded-2xl text-2xl text-gray-600">
                            <input
                                type="file"
                                multiple
                                className="hidden"
                                onChange={uploadPhotoHandler}
                            />
                            <UploadIcon />
                            Upload
                        </label>
                    </div>
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
