import React from 'react';
import { MenuList } from './MenuList'
import MenuItem from './MenuItem'
import './menu.css'
import NavBar from '../NavBar/NavBar'
import Order from './Order';
import { useState } from 'react';
export default function Menu() {

  const [order,addOrder]= useState([]);
  const addItem=(item)=>{
    const exist = item.find((item1) => item1.id === item.id);
    if(exist){
      addOrder(item.map(item1 => item1.id === item.id ? {...exist, qty: exist.qty + 1} : item1));
    }else{
      addOrder([...order,{...item,qty:1}]);
    }
  }
  const removeItem = (item) => {
    const exist = order.find((item1) => item.id === item1.id);
    if (exist.qty === 1) {
        addOrder(order.filter((item1) => item.id !== item1.id));
    } else {
        addOrder(order.map(item1 => item.id === item1.id ? {...exist, qty: exist.qty - 1} : item));
    }
    
};
  return (
    
    <div className="menu">
      <NavBar/>
     <h1 className="menuTitle">ITT CANTEEN  MENU</h1>
    <div className="menuList">
      {MenuList.map((menuItem, key) => {
        return (
          <MenuItem
            // key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            time={menuItem.time}
            k={menuItem.id}
            
            menuList={MenuList}
          />
        );
      })}
    </div>
    </div>
    
  );
}
