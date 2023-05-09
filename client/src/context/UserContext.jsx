import axios from "axios";
import { createContext, useState, useEffect } from "react";

const UserContext = createContext({})
function UserContextProvider({ children }) {

    const [user, setUser] = useState(null)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        getUserProfile()
    }, [])

    const getUserProfile = async() => {
        if(!user) {
            const { data } = await axios.get("/profile")
            setUser(data)
            setIsReady(true)
        }
    }

    return (
        <UserContext.Provider value={{user, setUser, isReady}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }