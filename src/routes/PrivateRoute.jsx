import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

export const PrivateRoute = ({children}) => {
    const {isAuthenticated} = useContext(UserContext);
    if(isAuthenticated){
        return children;
    }else{
        alert('You are not authenticated, Redirecting you to Signup!');
        return <Navigate to="/signup" />
    }
}