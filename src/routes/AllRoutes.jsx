import { Route, Routes } from 'react-router-dom'
import { Signup } from '../pages/Signup'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { Profile } from '../pages/Profile'
import { PrivateRoute } from './PrivateRoute'
import { useContext, useEffect } from 'react'
import { UserContext } from '../App'

export const AllRoutes = () => {
    const { isAuthenticated } = useContext(UserContext);
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            const message = "Are you sure you want to leave this page, if you leave then your credentials will be lost & you have to create again?";
            event.returnValue = message;
            return message;
        };
        if (isAuthenticated) {
            window.addEventListener('beforeunload', handleBeforeUnload);
        }
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload); // Cleaning handleBeforeUnload
        }
    }, [isAuthenticated]);
    return (
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
    )
}