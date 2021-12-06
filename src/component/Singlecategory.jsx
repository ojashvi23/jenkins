import React, { useEffect } from 'react';

import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { mobileno, order, address, logout } from "../lib/utils";
import { useState } from 'react';
import Dailydeals from './Dailydeals';
import Singleitemimage from "../lib/Singleitemimage";
import Homedailycard from './Homedailycard';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import MenuBottom from '../container/MenuBottom';
import axios from 'axios';
import Cardincement from "./Cardincement";

function Singlecategory(props) {
    const [userdata, setUserdata] = useState([]);
    useEffect(() => {
  
      axios.post('http://13.126.77.1/api/getdailydealsviewall')
        .then(res => {
          console.log('response api view all product', res);
          setUserdata(res.data.result);
  
        })
        .catch(error => {
          console.log(error);
        })
    }, [])
    return (
        <div>
            <HamburgerMenu />
            <MenuBottom style={{marginTop:'300px'}} />
            <div>

{userdata.map((elem, index) => (
    <div style={{ float: 'left', margin: '2%',width:'290px'  }} className="cardItemsub" >
       <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305', marginLeft: '15px' }}>Best Seller</span>
      <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px', width:'40',height:'25px',marginTop:'6px'  }}>
        4.4</Button>{' '}
      <img src={elem.image} width="180px" height="180px" style={{ marginRight: 'auto', marginLeft: 'auto', display: 'block',marginTop:'20px' }} >
      </img>
    
      <div style={{ fontSize: '12px', fontWeight:'bold', color: '#222222',textAlign:'center', marginTop: '10px',marginLeft:'20px' }}>
        {elem.product_name}
      </div>
      <div style={{ marginTop: '10px', color: '#03A305', fontWeight: 'bold' }}>
        <span style={{ marginLeft: '20px' }}>{elem.price} /- </span>
        <span style={{ marginLeft: '20px' }}>{elem.discount_price} /- </span>

        <span style={{float:'right' }}>discount:{elem.discount}</span>
        
      </div>
        <Cardincement prouct={elem.product_id} /> 
    </div>
  ))}
</div>
        </div>
    );
}

export default Singlecategory;
