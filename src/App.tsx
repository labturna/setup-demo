import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './pages/LoginForm'
import './App.css';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
