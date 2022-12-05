import React, { createContext, useEffect, useState } from "react";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "../services/utils";

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    useEffect(() => {
        const user = getUserLocalStorage()
        if (user) {
            setUser(user)
        }
    }, [])
    
    const [user, setUser] = useState()

    async function autheticate(email, password) {
        const response = await loginRequest(email, password)

        const payload = { token: response.token, email }

        setUser(payload)
        setUserLocalStorage(payload)

    }

    async function logOut() {
        setUser(null)
        setUserLocalStorage(null)
    }

    return (
        <AuthContext.Provider value={{ ...user, autheticate, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}