import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Daily_deals } from "../lib/utils";
import { useState } from "react";
function Addredlabeltea(props) {
  const [data, setdata] = useState(true)
  const handlePage = () => {
    setdata(false)
    window.location.href = '/addtealabel'
  }

  return (
    <>


      <div style={{ marginTop: '50px' }}>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="2" style={{ marginLeft: '50px', marginBottom: '50px' }}>
              <Card style={{ width: '17rem' }} className='singlevalue'>
                <Card.Title>
                  <span className="span_value">{props.offer}</span>
                  <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305' }}>{props.seller}</span>
                  <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px' }}>{props.rating}</Button>{' '}
                </Card.Title>
                <div className="box">
                <Card.Img variant="top" src='assets/image/magggi.png' className="img_type" />

          </div>
                <Card.Body>
                  <div style={{ marginLeft: '16px', fontSize: '14px', color: '#222222' }}>
                    Maggi 2-minute Noodles Masala,70g(pack Of 12)
            </div>
                  <p>
                    <div style={{ marginLeft: '16px', marginTop: '10px' }}>
                      <span style={{ color: '#03A305', fontSize: '16px' }}>1₹ 135</span>

                      <span style={{ fontSize: '12px', color: '#222222', textDecoration: 'line-through', marginLeft: '8px' }}>MRP: ₹ 150</span>
                      <span style={{ color: '#7DCEA0', marginLeft: '8px', color: '#03A305', fontSize: '12px' }}>Save ₹ 15</span> </div> </p>

                  <Button variant="outline" style={{borderColor:' #03A305',height:'40px',width:'95px'}} className="deals_button" >
                    <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to</span>  <img src={Daily_deals} /></Button>{' '}
                </Card.Body>

              </Card>
            </MDBCol>
            <MDBCol md="2" style={{ marginLeft: '30px' }}>
              <Card style={{ width: '18rem' }} className='singlevalue' >
                <Card.Title>
                  <span className="span_value">{props.offer}</span>
                  <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305' }}>{props.seller}</span>
                  <Button variant="success"  className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px',borderColor:' #03A305' }}>{props.rating}</Button>{' '}
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

                  <Button variant="outline" style={{borderColor:' #03A305'}} className="deals_button" onClick={handlePage} >
                    <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to</span>  <img src={Daily_deals} /></Button>{' '}
                </Card.Body>

              </Card>
            </MDBCol>

            <MDBCol md="2" style={{ marginLeft: '50px' }}>
              <Card style={{ width: '18rem' }} className='singlevalue' >
                <Card.Title>
                  <span className="span_value">{props.offer}</span>
                  <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305' }}>{props.seller}</span>
                  <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px' }}>{props.rating}</Button>{' '}
                </Card.Title>
                <div className="box">
                <Card.Img variant="top" src='assets/image/41VXxVsYNIL._SX300_SY300_QL70_ML2_.png' className="img_type" />

          </div>
                <Card.Body>
                  <div style={{ marginLeft: '16px', fontSize: '14px', color: '#222222' }}>
                    Vim Dishwash Gel-750 ml(Lemon)
            </div>
                  <p>
                    <div style={{ marginLeft: '16px', marginTop: '10px' }}>
                      <span style={{ color: '#03A305', fontSize: '16px' }}>₹ 135</span>

                      <span style={{ fontSize: '12px', color: '#222222', textDecoration: 'line-through', marginLeft: '8px' }}>MRP: ₹ 150</span>
                      <span style={{ color: '#7DCEA0', marginLeft: '30px', color: '#03A305', fontSize: '8px',fontSize: '12px' }}>Save ₹ 15</span> </div> </p>

                  <Button variant="outline" style={{borderColor:' #03A305'}} className="deals_button" >
                    <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to</span>  <img src={Daily_deals} /></Button>{' '}
                </Card.Body>

              </Card>
            </MDBCol>
            <MDBCol md="2" style={{ marginLeft: '50px' }}>
              <Card style={{ width: '18rem' }} className='singlevalue' >
                <Card.Title>
                  <span className="span_value">{props.offer}</span>
                  <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305' }}>{props.seller}</span>
                  <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px' }}>{props.rating}</Button>{' '}
                </Card.Title>
                <div className="box">
                <Card.Img variant="top" src="assets/image/cadbury-bournvita-chocolate-health-drink-2c-1kg-jar-500x500.png" className="img_type" />

          </div>
                <Card.Body>
                  <div style={{ marginLeft: '16px', fontSize: '14px', color: '#222222' }}>
                    bournvita-chocolate-health Drink 1kg jar
            </div>
                  <p>
                    <div style={{ marginLeft: '16px', marginTop: '10px' }}>
                      <span style={{ color: '#03A305', fontSize: '16px' }}>₹ 276</span>

                      <span style={{ fontSize: '12px', color: '#222222', textDecoration: 'line-through', marginLeft: '16px' }}>MRP: ₹ 420</span>
                      <span style={{ color: '#7DCEA0', marginLeft: '8px', color: '#03A305', fontSize: '12px' }}>Save ₹ 44</span> </div> </p>

                  <Button variant="outline" style={{borderColor:' #03A305'}} className="deals_button" >
                    <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to</span>  <img src={Daily_deals} /></Button>{' '}
                </Card.Body>

              </Card>
            </MDBCol>
            <MDBCol md="2" style={{ marginLeft: '50px' }}>
              <Card style={{ width: '18rem' }} className='singlevalue'>
                <Card.Title>
                  <span className="span_value">{props.offer}</span>
                  <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305' }}>{props.seller}</span>
                  <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px' }}>{props.rating}</Button>{' '}
                </Card.Title>

                <div className="box">
                <Card.Img variant="top" src="assets/image/cadbury-bournvita-chocolate-health-drink-2c-1kg-jar-500x500.png" className="img_type" />

          </div>                <Card.Body>
                  <div style={{ marginLeft: '16px', fontSize: '14px', color: '#222222' }}>
                    bournvita-chocolate-health Drink 1kg jar
            </div>
                  <p>
                    <div style={{ marginLeft: '16px', marginTop: '10px' }}>
                      <span style={{ color: '#03A305', fontSize: '16px' }}>₹ 276</span>

                      <span style={{ fontSize: '12px', color: '#222222', textDecoration: 'line-through', marginLeft: '8px' }}>MRP: ₹ 420</span>
                      <span style={{ color: '#7DCEA0', marginLeft: '8px', color: '#03A305', fontSize: '12px' }}> Save ₹ 44</span> </div> </p>

                  <Button variant="outline" style={{borderColor:' #03A305'}} className="deals_button" >
                    <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to</span>  <img src={Daily_deals} /></Button>{' '}
                </Card.Body>

              </Card>
            </MDBCol>
          </MDBRow>
        </MDBContainer>



      </div>


    </>
  )
}
export default Addredlabeltea