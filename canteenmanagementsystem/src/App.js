import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import Order from './components/Menu/Order';
import Admin from './components/Admin/Admin';
import AdminRegister from './components/AdminRegister/AdminRegister';
import AddMenu from './components/AddMenu/AddMenu'
import NewMenusItem from './components/AddMenu/NewMenusItem'
import {MenuList} from './components/Menu/MenuList'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
function App() {
  
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={< Register />} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/adminlogin" element={<Admin />} />
      <Route path="/adminregister" element={<AdminRegister/>} />
      <Route path="/adminmenu" element={<AddMenu/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/additem" element={<NewMenusItem/>} />
    </Routes>
  </BrowserRouter>    
  );
}

export default App;
