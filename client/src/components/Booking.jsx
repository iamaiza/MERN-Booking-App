import React from "react";

const Booking = ({ place }) => {
    return (
        <div className="bg-white shadow p-4 rounded-2xl">
            <div className="text-xl font-semibold">
                Price: ${place.price} / per night
            </div>
            <div className="border rounded-2xl my-4">
                <div className="flex">
                    <div className="flex-1 py-3 px-4 border-r">
                        <label htmlFor="">Check-in</label>
                        <input type="date" className="block w-full" />
                    </div>
                    <div className="flex-1 py-3 px-4">
                        <label htmlFor="">Check-out</label>
                        <input type="date" className="block w-full" />
                    </div>
                </div>
                <div className="py-2 px-4 border-t">
                    <label htmlFor="">Guest</label>
                    <input type="number" className="block w-full" value={1} />
                </div>
            </div>

            <button className="primary">Book the place now</button>
        </div>
    );
};

export default Booking;
