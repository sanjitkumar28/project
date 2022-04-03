import React from 'react'
import "./homepage.css"
import BackImage from './food.jpeg'
import NavBar from '../NavBar/NavBar'

export default function HomePage() {
  return (
    <div className="headerContainer">
      <NavBar/>
      <h1 className='navbar-dark bg-dark'>Intime Tec Canteen</h1>
        {/* <p>INDIAN FOOD AT A CLICK</p> */}
        <div className="home" style={{ backgroundImage: `url(${BackImage})` }}>
        </div>
      </div>
   
  )
}
