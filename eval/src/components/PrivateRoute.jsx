import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
// import {authReducer} from "../redux/Auth/reducer"
export const PrivateRoute = ({ children }) => {
    const { userRole } = useSelector((state) => ({
        userRole: state.authReducer.userRole
    }))
    console.log("role",userRole)
    if (userRole==="") {
        return <Navigate to="/login" />
    }
    return children
}