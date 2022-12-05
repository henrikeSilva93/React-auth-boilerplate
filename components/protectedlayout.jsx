import { UseAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom";

export const ProtectedLayout = ({ children }) => {

    const auth = UseAuth()
    if (!auth.email) {
        return (
          
            <Navigate to='/login' replace={true}/>
            // <h1>você não tem acesso</h1>
        )
    }

    return children
    
}