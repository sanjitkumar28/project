import React from 'react'
import {AddMenuList } from './AddMenuList';
import {useNavigate ,Link } from "react-router-dom"
export default function MenuItem({image,addItem,menuList}) {
  return (
    <div class="menuItem">
         <div style={{ backgroundImage: `url(${image})` }}> </div>
         <button type="button" className="btn btn-dark mx-3" onClick={() => addItem(menuList)} >
         <Link to="/additem" style={{ textDecoration: 'none',fontSize:'15px',color: '#FFFFFF' }}>Add Item</Link >
         </button>
         <button type="button" className="btn btn-dark mx-3" onClick={() => addItem(menuList)} >Edit/Remove</button>
    </div>
  );
}