import React , { useEffect } from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
// import { Daily_deals } from "../lib/utils";
import { useState } from "react";
import axios from "axios";
import Cardincement from "./Cardincement";
function Dailydeals(props) {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {

    axios.post('https://market.jprtechnosoft.com/api/getdailydeals')
      .then(res => {
        console.log('response api daily deals', res);
        setUserdata(res.data.result);

      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <div style={{paddingBottom:'300px',marginBottom:'100px'}}>

      {userdata.map((elem, index) => (
          <div style={{ float: 'left', margin: '0.2%',width:'240px'  }} className="cardItemsub" >
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
            <div> 
              <Cardincement prouct={elem.product_id} /> 
              </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Dailydeals