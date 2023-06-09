import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false)
    const { setUser } = useContext(UserContext)

    const userLoginHandler = async(e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("/login", { email, password })
            setUser(data)
            alert("Login successful")
            setEmail("")
            setPassword("")
            setRedirect(true)
        } catch (error) {
            console.log(error.message);
            alert('Login failed')
        }
    }

    if(redirect) {
        return <Navigate to="/" />
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">
                <h1 className="text-4xl text-center mb-4 font-semibold">
                    Login
                </h1>
                <form action="" className="max-w-md mx-auto" onSubmit={userLoginHandler}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <button className="primary mt-2">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet?
                        <Link
                            to="/register"
                            className="ml-1 text-black underline"
                        >
                            Register now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
