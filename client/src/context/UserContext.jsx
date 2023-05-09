import axios from "axios";
import { createContext, useState, useEffect } from "react";

const UserContext = createContext({})
function UserContextProvider({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserProfile()
    }, [])

    const getUserProfile = async() => {
        if(!user) {
            const { data } = await axios.get("/profile")
            setUser(data)
        }
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }