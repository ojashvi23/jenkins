import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import MenuBottom from '../container/MenuBottom';
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Cardincement from './Cardincement';

const Subcategoryitem = (props) => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const params = new URLSearchParams();
    const id = props.match.params.category_id;
    console.log("category id res", id);
    params.append('category_id', id);
    axios.post('https://market.jprtechnosoft.com/api/get_product_by_categoryid', id)

      .then(res => {
        console.log("responce api cate", res);
        setUserdata(res.data.category_name.product);
        console.log(userdata + "reduce data");
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <HamburgerMenu />
      <MenuBottom />

      <div style={{ float: 'left', marginLeft: '50px' }}>


        {userdata.map((elem, index) => (
          <div style={{ float: 'left', margin: '0.2%',width:'220px'  }} className="cardItemsub" >
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
              <span style={{ color: 'green' }}><Cardincement prouct={elem.product_id} /></span>
          </div>
        ))}
      </div>


    </>
  );

}


export default Subcategoryitem;
