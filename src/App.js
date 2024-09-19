import './App.css';
import { useState, createContext } from 'react';
import { AllRoutes } from './routes/AllRoutes';
import { Navbar } from './components/Navbar';
import { profileDummyData } from './utils/initData';

export const UserContext = createContext(null);
export default function App() {
  // initProfileData
  const [user, setUser] = useState(profileDummyData);
  const pathNameArr=window.location.pathname.split('/');
  const path = pathNameArr.find(el=>el!=='');
  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated:Object.keys(user).length>0}}>
       <Navbar path={path}/>
       <AllRoutes/> 
    </UserContext.Provider>
  );
}