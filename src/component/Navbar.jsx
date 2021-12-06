import React from 'react';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
import Homerouting from './Homerouting';
import { } from "react-bootstrap"
// import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { MDBContainer, MDBRow } from 'mdbreact';

const Navbar = () => {
    return (
        <>

            <div className="menu_style" >
              
                <p to="/cart" className="mycartItem" style={{borderBottom:"5px solid green"}}>My Cart </p>
                <p to="/mobile" className="mycartItem" >Mobile Verfication</p>
                <p to="/delivery" className="mycartItem">Delivery Address</p>
                <p to="/date"className="mycartItem">Date & Time</p>
                <p to="/pay" className="mycartItem">Payment</p>

               
            </div>
           
           

        </>

    )
};
export default Navbar