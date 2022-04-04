import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mx-2 mb-lg-0">
          <li className="nav-item mx-4">
            <Link to="/login" style={{ textDecoration: 'none',fontSize:'20px',color: '#FFFFFF'}}>User</Link >
          </li>
          <li className="nav-item mx-4">
            <Link to="/adminlogin" style={{ textDecoration: 'none',fontSize:'20px',color: '#FFFFFF'}}>Admin</Link>
          </li>
          <li className="nav-item mx-4 ">
            <Link to="/menu" style={{ textDecoration: 'none',fontSize:'20px',color: '#FFFFFF' }}>Menu</Link >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
