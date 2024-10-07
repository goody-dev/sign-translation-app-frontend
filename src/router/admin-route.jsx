import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../provider/authProvider";
import Dashboard from "../Dashboard";


const AdminRoute = () => {
    const { token } = useAuth();
    if(token === "initial" || (token.userRole && token.userRole !== "ADMIN")) {
        return <Navigate to="/" />
    }
    return <Dashboard />
}

export default AdminRoute