import './App.css';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Signup} />
        <Route path="/signup" Component={Signup} />
        <Route path="/login" Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
