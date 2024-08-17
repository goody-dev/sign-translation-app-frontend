import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../provider/authProvider";


const ProtectedRoute = () => {
    const { token } = useAuth();
    if(!token || token === "initial") {
        return <Navigate to="/signin" />
    }
    return <Outlet/>
}

export default ProtectedRoute