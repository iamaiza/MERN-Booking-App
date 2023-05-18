import React, { Fragment, useState } from "react";
import axios from "axios";
import { DeleteIcon, FilledStarIcon, StarIcon, UploadIcon } from "../icons/PlaceIcons";

const UploadImg = ({ photos, setPhotos }) => {
    const URL = import.meta.env.VITE_IMG_URL;
    const [photo, setPhoto] = useState("");

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

    const uploadPhotoHandler = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append("photos", files[i]);
        }
        const { data: filenames } = await axios.post("/upload", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        setPhotos((pre) => {
            return [...pre, ...filenames];
        });
    };

    const deleteImageHandler = img => {
        setPhotos([...photos.filter(photo => photo !== img)])
    };

    const selectAsMainImageHandler = img => {
        const unselectedPhotos = photos.filter(photo => photo !== img)
        const newSelectedPhoto = [img, ...unselectedPhotos]
        setPhotos(newSelectedPhoto)
    }

    return (
        <Fragment>
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
                        <div key={link} className="h-32 flex relative">
                            <img
                                className="rounded-2xl w-full object-cover"
                                src={URL + link}
                                alt=""
                            />
                            <button
                                className="absolute bottom-1 right-1 bg-black py-1 px-1 bg-opacity-70 rounded-full cursor-pointer"
                                onClick={e => {
                                    e.preventDefault()
                                    deleteImageHandler(link)
                                }}
                            >
                                <DeleteIcon />
                            </button>
                            <button
                                className="absolute bottom-1 left-1 bg-black py-1 px-1 bg-opacity-70 rounded-full cursor-pointer"
                                onClick={e => {
                                    e.preventDefault()
                                    selectAsMainImageHandler(link)
                                }}
                            >
                                {link === photos[0] ? <FilledStarIcon /> : <StarIcon />}
                                
                            </button>
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
        </Fragment>
    );
};

export default UploadImg;
