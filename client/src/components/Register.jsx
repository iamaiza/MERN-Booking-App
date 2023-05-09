import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUserHandler(e) {
        e.preventDefault();

        try {
            await axios.post("/register", {
                name,
                email,
                password,
            });
            alert("Your registration is completed. Now you can login");
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-56">
                <h1 className="text-4xl text-center mb-4 font-semibold">
                    Register
                </h1>
                <form
                    action=""
                    className="max-w-md mx-auto"
                    onSubmit={registerUserHandler}
                >
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className="primary mt-2">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member?
                        <Link to="/login" className="ml-1 text-black underline">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
