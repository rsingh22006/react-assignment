import React from 'react';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Signup}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/login" Component={Login}/>
      </Routes>
    </div>
  );
}

export default App;