import './App.css';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Signup}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/login" Component={Login}/>
        <Route path="/dashboard" Component={Dashboard}/>
      </Routes>
    </div>
  );
}

export default App;