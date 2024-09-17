import { Route, Routes } from 'react-router-dom'
import { Signup } from '../pages/Signup'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { Profile } from '../pages/Profile'
import { PrivateRoute } from './PrivateRoute'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
        </Routes>
    )
}