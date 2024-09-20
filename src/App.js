import './App.css';
import { useState, createContext } from 'react';
import { AllRoutes } from './routes/AllRoutes';
// import { profileDummyData } from './utils/initData';

export const UserContext = createContext(null);
export default function App() {
  //  if you want to test the authentication then u can also use this profileDummyData in setUser
  // const [user, setUser] = useState(profileDummyData);
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated: Object.keys(user).length > 0}}>
      <AllRoutes />
    </UserContext.Provider>
  );
}