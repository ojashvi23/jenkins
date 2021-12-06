import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Singleitemimage } from "../lib/Singleitemimage";
import { Daily_deals } from "../lib/utils";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

function Homedailycard(props) {
  return (
    <>
      <div>

     <div style={{marginLeft:'50px'}}>
        <Card style={{ width: '18rem' }} className="Homedaily">
          <Card.Title>
            <span className="span_value">{props.offer}</span>
            <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305' }}>{props.seller}</span>
            <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px' }}>{props.rating}</Button>{' '}
          </Card.Title>

          <div className="box">
          <Card.Img variant="top" src={props.imgValue} className="img_type" />

          </div>
          <Card.Body>
            <div style={{ marginLeft: '16px', fontSize: '14px', color: '#222222' }}>
              {props.item1}
            </div>
            <p>
              <div style={{ marginLeft: '16px', marginTop: '10px' }}>
                <span style={{ color: '#03A305', fontSize: '16px' }}>{props.price}</span>

                <span style={{ fontSize: '12px', color: '#222222', textDecoration: 'line-through', marginLeft: '8px' }}>{props.MRP}</span>
                <span style={{ color: '#7DCEA0', marginLeft: '8px', color: '#03A305', fontSize: '12px' }}>{props.save}</span> </div> </p>

            <Button variant="outline" style={{borderColor:' #03A305'}} className="deals_button"><span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to</span>  <img src={Daily_deals} /></Button>{' '}
          </Card.Body>
        </Card>
        </div>
      </div>
    </>
  )
}
export default Homedailycard