import React, { useEffect} from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { CardImage } from "../lib/CardImage";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import axios from "axios";
import { useState } from "react";


function CardComponent(props) {
  const [userdata, setUserdata] = useState([]);
useEffect(() => {

  axios.get('https://market.jprtechnosoft.com/api/get_discount_with_limit')
    .then(res => {
      console.log('response discount api', res);
      setUserdata(res.data.result);

    })
    .catch(error => {
      console.log(error);
    })
}, [])
  return (
    <>
      <div >
      {userdata.map((elem, index) => (
          <div>
        <Card style={{ width: '12.5rem' }} className="cardItem">
        

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
    </>
  )
}
export default CardComponent