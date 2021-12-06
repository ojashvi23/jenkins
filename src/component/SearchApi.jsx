import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import Cardincement from './Cardincement';
import HamburgerMenu from '../container/menu/HamburgerMenu';
function SearchApi(props) {
    const [userdata,setData] = useState([]);
    const searchvalue=localStorage.getItem('search');
    axios.get(`https://market.jprtechnosoft.com/api/search?search=${searchvalue}`)
    .then(res => {
        console.log("responce search api data", res);
        setData(res.data.result);
        // setvauledata(res.data.result);
        // console.log("total price", res.data.result);
        
    })
    .catch(error => {
        console.log(error)
    })
      

  return (
    <>
    <HamburgerMenu />
    <div style={{ float: 'left', marginLeft: '50px' }}>


    {userdata.map((elem, index) => (
      <div style={{ float: 'left', margin: '0.5%',width:'200px'  }} className="cardItemsub" >
         <Button style={{marginLeft:'10px',marginTop:'10px'}} variant="success">{elem.discount_price}  OFF</Button>{' '}
        <img src={elem.image} width="180px" height="180px" style={{ marginRight: 'auto', marginLeft: 'auto', display: 'block' }} >
        </img>
      
        <div style={{ fontSize: '14px', color: '#222222', marginLeft: '20px', marginTop: '10px' }}>
          {elem.product_name}
        </div>
        <div style={{ marginTop: '10px', color: '#03A305', fontWeight: 'bold' }}>
          <span style={{ marginLeft: '20px' }}>Price:{elem.price} </span>
          <span style={{float:'right' }}>discount:{elem.discount}</span>
          
        </div>
          <span style={{ color: 'green' }}><Cardincement prouct={elem.product_id}/></span>
      </div>
    ))}
  </div>
  </>
  );
}

export default SearchApi;
