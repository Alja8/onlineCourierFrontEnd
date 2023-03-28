import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import Home from "./components/Home";
import Login from "./components/Login";
import AdminHome from './components/AdminHome';
import Customer from "./components/CustomerHome";

// import ApplicantHome from './components/ApplicantHome';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Admin" element={<AdminHome />} />
        <Route path="/Customer" element={<Customer />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
