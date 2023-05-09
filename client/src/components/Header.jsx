import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogoIcon, SearchIcon, HambargerIcon, UserIcon } from "./icons/Icons";
import { UserContext } from "../Context/UserContext";

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header className="flex items-center justify-between mb-5">
            <Link to="/" className="flex items-center gap-1 text-primary">
                <LogoIcon />
                <span className="font-bold text-xl">airbnb</span>
            </Link>
            <div className="flex gap-3 border rounded-full py-3 px-7 shadow-md shadow-gray-300">
                <div className="font-bold">Anywhere</div>
                <div className="border-l"></div>
                <div className="font-bold">Anyweek</div>
                <div className="border-l"></div>
                <div className="text-gray-400">Add guests</div>
                <button className="bg-primary text-white p-1 rounded-full">
                    <SearchIcon />
                </button>
            </div>
            <Link
                to={user ? "/account" : "/login"}
                className="flex items-center gap-3 border rounded-full py-2 px-4"
            >
                <HambargerIcon />
                {!user ? (
                    <div className="bg-gray-500 text-white rounded-full border-2 border-gray-500 overflow-hidden">
                        <UserIcon />
                    </div>
                ) : (
                    <div className="w-7 h-7 rounded-full bg-primary text-white flex justify-center items-center font-bold">
                        {user.name.split("")[0]}
                    </div>
                )}
            </Link>
        </header>
    );
};

export default Header;
