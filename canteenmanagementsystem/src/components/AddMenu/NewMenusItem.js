import React from 'react'
import './NewMenusItem.css'
export default function NewMenusItem() {
  return (
    <div>
      <div className="register">
      <h1 className="menuTitle">ADD AN ITEM</h1>
       <input type="text" name="id"  placeholder="Add Item Id" ></input>
            <input type="text" name="name"  placeholder="Add Item name" ></input>
            <input type="text" name="item price"  placeholder="Add Item Price" ></input>
            <input type="text" name="item preparation time"  placeholder="Add Item Preparation Time" ></input>
            <div className="form-group">
            <label htmlFor="exampleFormControlFile1"><h4>Upload New Item Image Here</h4></label>
            <br></br>
            <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
            <br></br>
            <button class="btn btn-primary " type="submit">Submit</button>
            </div>
      </div> 
    </div>
  )
}
