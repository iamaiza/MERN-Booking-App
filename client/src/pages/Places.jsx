import React from "react";
import { Link, useParams } from "react-router-dom";
import { PlusIcon } from "../icons/PlaceIcons";
import PlaceForm from "../components/PlaceForm";

const Places = () => {
    const { actionId } = useParams();
    return (
      <div>
        {actionId !== "new" ? (
          <div className="text-center">
            <Link
              to="/account/places/new"
              className="inline-flex items-center gap-1 bg-primary text-white py-2 px-6 rounded-full"
            >
              <PlusIcon />
              Add new place
            </Link>
          </div>
          ) : (
            <PlaceForm />
        )}
      </div>
    );
};

export default Places;
