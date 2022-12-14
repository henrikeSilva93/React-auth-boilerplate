import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"

export const UseAuth = () => {
    const context = useContext(AuthContext)

    return context
}