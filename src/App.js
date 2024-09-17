import './App.css';
import { useState, createContext } from 'react';
import { AllRoutes } from './routes/AllRoutes';

export const UserContext = createContext(null);
function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
       <AllRoutes/>
    </UserContext.Provider>
  );
}

export default App;