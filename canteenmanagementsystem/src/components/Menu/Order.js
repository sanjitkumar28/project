import React from 'react'
import { useLocation } from "react-router-dom";

function Order() {
    const location = useLocation();
    console.log(location.state);
    
  return (
    <div id="mySidenav" className="sidenav">
    <div className="container" id="container">
        <div className="row">
            <div className="col-md-6">
                <h3>Active Order</h3>
                <hr/>
                <div className="table-responsive" id="table">
                    <table className="table">
                        <thead id="table-header">
                        <tr>
                            
                            <th>Item</th>
                            <th>Time</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody id="table-body">
                            <tr >
                                <td><strong>{location.state.name}</strong></td>
                                <td>{location.state.price}</td>
                                <td>{location.state.time}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
  );
 }
export default Order;