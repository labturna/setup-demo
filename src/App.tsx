import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
