import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

export const PrivateRoute = ({children}) => {
    const {user} = useContext(UserContext);
    const isAuthenticated=Object.keys(user).length>0;
    return isAuthenticated ? children : <Navigate to="/signup" />;
}