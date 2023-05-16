import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "../icons/PlaceIcons";
import Navigation from "../components/Navigation";
import axios from "axios";
import Places from "../components/Places";

const PlacesPage = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
      getAllPlaces()
    }, [])

    const getAllPlaces = async() => {
      const { data } = await axios.get("/places")
      setPlaces(data)
    }
    return (
      <div>
        <Navigation />
          <div className="text-center">
            <Link
              to="/account/places/new"
              className="inline-flex items-center gap-1 bg-primary text-white py-2 px-6 rounded-full"
            >
              <PlusIcon />
              Add new place
            </Link>
          </div>
          <div className="mt-4">
            {places.length > 0 && places.map(place => (
              <Places key={place._id} place={place} />
            ))}
          </div>
      </div>
    );
};

export default PlacesPage;
