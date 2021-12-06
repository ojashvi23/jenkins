import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ListGroup } from "react-bootstrap"
import { maggiImage, chilli } from "../lib/utils";
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from 'react';
import { minusbutton, Plusbutton } from "../lib/utils";
import axios from 'axios';
import Incerdrement from "./Incerdrement";
import Mycartdeletecart from './Mycartdeletecart';
const Mycartrouting = (props) => {
  const [userdata, setUserdata] = useState([]);
  const [valuedata, setvauledata] = useState([]);
  const [data, showdata] = useState(false);
  const [num, setNum] = useState(1);
  const increment = () => {
    const product1 = props.prouct;
    const Customer = localStorage.getItem('customer_id');
    setNum(num + 1);
    axios.post(`https://market.jprtechnosoft.com/api/updatetocard?customer_id=${Customer}&product_id=${product1}&quantity=${num}`)
      .then(res => {
        console.log("responce api updatetocard", res);
        console.log("increment card");
        setUserdata(res.data.result);
      })
      .catch(error => {
        console.log(error)
      })
  }
  const decrement = () => {
    const product1 = props.prouct;
    console.log("data props", product1);
    const Customer = localStorage.getItem('customer_id');
    if (num > 0) {

      setNum(num - 1);
      axios.post(`https://market.jprtechnosoft.com/api/updatetocard?customer_id=${Customer}&product_id=${product1}&quantity=${num}`)
        .then(res => {
          console.log("responce api updatetocard", res);
          console.log("decrement card");
        })
    }
    else {
      setNum(0);
    }
  }


  const handlepage = () => {
    showdata(false);
    window.location.href = '/mobile';

  }

  

  useEffect(() => {

    const Customer = localStorage.getItem('customer_id');
    //  console.log("id mobile",pro_id)
    axios.post(`https://market.jprtechnosoft.com/api/gettocard?customer_id=${Customer}`)
      .then(res => {
        console.log("responce api routing api", res);
        console.log("hii");
        setUserdata(res.data.result.cart_info);
        setvauledata(res.data.result);
        console.log("total price", res.data.result);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <>



      <MDBContainer fluid className="text-center text-md-left" style={{ marginTop: '40px' }}>
        <MDBRow>
          <MDBCol md="11">
            <div style={{ marginLeft: '150px', marginTop: "5px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>

              <div style={{ maxHeight: "45px" }}>
                <ListGroup horizontal className="nchange_13" >
                  <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305", padding: '15px' }}>My cart</ListGroup.Item>
                  <ListGroup.Item className="listing" style={{ border: "none", padding: '15px' }}>Delivery Address</ListGroup.Item>
                  <ListGroup.Item className="listing" style={{ border: "none", padding: '15px' }}>Date & Time</ListGroup.Item>
                  <ListGroup.Item className="listing" style={{ border: "none", padding: '15px' }}>Payment</ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="11">
            <div style={{ marginLeft: '150px', marginTop: "30px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014' }}>
              <MDBRow >

                <MDBCol md="5" className="mdcolcss"  >
                  {userdata.map((elem, index) => (
                    <div>
                      <p style={{ marginTop: '50px' }}>
                        <span style={{ marginLeft: '1px', color: '#222222', font: 'regular', marginTop: '20px' }}>{elem.product_id}</span>
                        <img src={elem.product_image} className="mycartrouting_img" style={{ marginTop: '20px' }} />
                        <span style={{ marginLeft: '15px', fontSize: '14px', color: '#222222', font: 'Nunito SemiBold' }}>{elem.product_title}</span>

                      </p>
                      {elem.discount != 0 ? <p style={{ marginLeft: '26px', color: 'green', fontSize: '14px', lineHeight: '0.2' }}>{elem.regular_price}
                        <span className="MRP_cart_routing" style={{ color: 'black' }}>MRP:{elem.price}</span><span style={{ marginLeft: '10px', fontSize: '14px' }}>Save {Math.round(elem.discount * elem.price / 100)}</span>

                      </p> : <span style={{ color: 'black', marginLeft: '280px' }}>MRP:{elem.price}</span>
                      }

                    </div>
                  ))}


                </MDBCol>
                <MDBCol md="2" style={{ marginLeft: '65px' }}>
                  {userdata.map((elem, index) => (
                    <Mycartdeletecart prouct={elem.product_id} cartid={elem.cart_id} />


                  ))}
                </MDBCol>
                <MDBCol md="4" className="mdcolcss" >
                  {userdata.map((elem, index) => (

                    <div style={{ marginTop: '70px' }}>

<Button variant="outline-success" onClick={decrement} style={{ fontWeight:'bold',color:'green'}} >-</Button>{' '}

                      {/* <img src={minusbutton} onClick={decrement} /> */}
                      <span style={{ color: 'green', marginLeft: '15px', marginRight: '20px', marginTop: '100px' }} value={num} >{elem.quantity}</span>
                      {/* <img src={Plusbutton} onClick={increment} /> */}
                      <Button variant="outline-success" onClick={increment} style={{ fontWeight:'bold',color:'green'}} >+</Button>{' '}

                      {/* <Incerdrement prouct={elem.product_id}  /> */}
                      <span style={{ marginLeft: '133px', color: '#222222', font: 'regular' }}><ClearIcon  /></span>
                      <span style={{ marginLeft: '160px', color: '#222222', font: 'regular', fontSize: '14px' }}>{elem.quantity * elem.regular_price}</span>
                      <span style={{ marginLeft: '120px', color: '#222222', font: 'regular', fontSize: '14px' }}>{elem.quantity * elem.regular_price}</span>
                    </div>
                  ))}
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="11">
            <div style={{ marginLeft: '150px', marginTop: "1px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', height: '450px' }}>
              <MDBRow >
                <MDBCol md="2"  >

                  <p style={{ marginLeft: '48px', color: '#03A305', fontWeight: 'bold', marginTop: '220px' }}>{valuedata.quantity} Items</p>
                </MDBCol>

                <MDBCol md="7" >
                </MDBCol>

                <MDBCol md="3" style={{ marginTop: '260px' }}>

                  <p style={{ fontSize: '14px', color: '#222222' }}>Total:
<span style={{ marginLeft: '150px' }}>{valuedata.total_price}</span>
                  </p>
                  <Button variant="success" style={{ padding: '8px 90px', borderRadius: '8px 8px 8px 8px', marginTop: '20px' }} onClick={handlepage}>
                    Next
</Button>
                </MDBCol>

              </MDBRow>

            </div>
          </MDBCol>

        </MDBRow>





      </MDBContainer>



    </>
  )
};
export default Mycartrouting