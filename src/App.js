import './App.css';
import { useState, createContext } from 'react';
import { AllRoutes } from './routes/AllRoutes';
import { Navbar } from './components/Navbar';

export const UserContext = createContext(null);
export default function App() {
  //  profileDummyData
  const [user, setUser] = useState({});
  const pathNameArr = window.location.pathname.split('/');
  const path = pathNameArr.find(el => el !== '');
  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated: Object.keys(user).length > 0 }}>
      <Navbar path={path} />
      <AllRoutes />
    </UserContext.Provider>
  );
}