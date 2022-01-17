import { useSelector } from "react-redux"
export const PrivateRoute = ({ children }) => {
    const { role } = useSelector((state) => ({
        email: state.authReducer.email,
        role: state.authReducer.role
    }))
    if(role=="ADMIN")
}