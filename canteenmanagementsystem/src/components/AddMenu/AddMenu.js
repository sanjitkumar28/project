import React from 'react';
import {AddMenuList } from './AddMenuList'
import AddMenuItem from './AddMenuItem'
import './AddMenu.css'
import NavBar from '../NavBar/NavBar';
export default function Menu(additem) {
  return (
    <div className="menu">
      <NavBar/>
     <h1 className="menuTitle">ITT CANTEEN  MENU</h1>
    <div className="menuList">
      {AddMenuList.map((menuItem, key) => {
        return (
          <AddMenuItem
            // key={key}
            image={menuItem.image}
            addItem={additem}
           AddMenuList={AddMenuList}
          />
        );
      })}
    </div>
  </div>
  );
}
