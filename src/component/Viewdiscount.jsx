import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import MenuBottom from '../container/MenuBottom';
import Cardincement from "./Cardincement";
import { Button, Card } from "react-bootstrap";
function Viewdiscount() {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {

    axios.get('https://market.jprtechnosoft.com/api/getdiscount')
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
    <MenuBottom />
    <div >
      {userdata.map((elem, index) => (
          <div>
        <Card style={{ width: '18rem' }} className="cardItem">
        

          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#03A305', marginTop: '12px', marginLeft: '12px' }}>{elem.discount}</h4>
          <div className="box4">
          <a href={'/subitem/category_id=' + elem.category_id} >
            <Card.Img variant="top" src={elem.category_image} className="img_type" />
            </a>
          </div>
          <Card.Body>
            <center><h5 style={{ fontSize: '16px', color: '#222222' }}>{elem.category_name}</h5></center>
          </Card.Body>
         
        </Card>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Viewdiscount;
