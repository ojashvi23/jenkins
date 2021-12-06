import React, { useEffect } from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Daily_deals } from "../lib/utils";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { useState } from "react";
import axios from "axios";
import Cardincement from "./Cardincement";

function Bestselling(props) {
  const [userdata, setUserdata] = useState([]);
  
  useEffect(() => {

    axios.get('https://market.jprtechnosoft.com/api/getnewoffersonproduct')
      .then(res => {
        console.log('response api', res);
        setUserdata(res.data.result);

      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <div>

      {userdata.map((elem, index) => (
          <div style={{ float: 'left', margin: '1%',width:'220px'  }} className="cardItemsub" >
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
    </>
  )
}
export default Bestselling;
