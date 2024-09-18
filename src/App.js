import './App.css';
import { useState, createContext } from 'react';
import { AllRoutes } from './routes/AllRoutes';

export const UserContext = createContext(null);
export default function App() {
  // const initData =  { name: 'Ritik', username: 'ri@1234567', email: 'ri@gmail.com', phoneNumber: '1234567891', password: 'ri@123456' }
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated:Object.keys(user).length>0}}>
       <AllRoutes/>
    </UserContext.Provider>
  );
}