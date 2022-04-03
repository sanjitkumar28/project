import React from 'react'
import { MenuList } from './MenuList';
import {useNavigate ,Link } from "react-router-dom"


export default function MenuItem({image,name,price,time,k,menuList}) {

  const history =  useNavigate ()

  return (
    <div class="menuItem">
         <div style={{ backgroundImage: `url(${image})` }}> </div>
         {/* <button type="button" class="btn btn-secondary">Order</button>
         <button type="button" className="btn btn-primary btn-lg">Order Now</button> */}
         <button type="button" className="btn btn-dark " onClick={()=> history('/order',{state:{name:name,price:price,time:time,quantity:1}})} >Order Now</button>
        <h1>{name}</h1>
        <h3>{price} &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; <span>{time}</span></h3>
        {/* <h4>}</h4> */}
    </div>
  );
}
