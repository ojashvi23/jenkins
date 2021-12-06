import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ListGroup } from "react-bootstrap"
import { homeIcon1 } from "../lib/utils";
import Addaddress from './Addaddress';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import Navbar from './Navbar';
import { useState } from 'react';
import axios from 'axios';
import Editaddress from './Editaddress';
import ShippingDetail from './Shipping_detail';

const Mobileverification = (props) => {
    const [data, showdata] = useState(true);
    const [userdata, setUserdata] = useState([]);
    const [loc, setloc] = useState([]);

    useEffect(() => {

        const Customer = localStorage.getItem('customer_id');
        console.log("id mobile", Customer)
        axios.post(`https://market.jprtechnosoft.com/api/getcustomeraddress?id=${Customer}`)
            .then(res => {
                console.log("responce address api find ", res);
                setUserdata(res.data.data);

            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handlepage = (e) => {
        showdata(false);
        window.location.href = '/date';



    }


    const Customer = localStorage.getItem('customer_id');
    const data_type = `${loc}`;
    console.log("api value data value item", data_type);
    axios.post(`https://market.jprtechnosoft.com/api/addshippingaddress?customer_id=${Customer}&type=${data_type}`)
        .then(res => {
            console.log("responce shipping id ", res);
            // setUserdata(res.data);
            localStorage.setItem('shipping_id', res.data.result);
            console.log("ship id val", res.data.result)


        })
        .catch(error => {
            console.log(error)
        })
    console.log("api vl shipping", { loc })


    return (
        <>

            <HamburgerMenu />

            <MDBContainer fluid className="text-center text-md-left" style={{ marginTop: '70px' }}>

                <MDBRow>
                    <MDBCol md="11">
                        <div style={{ marginLeft: '150px', marginTop: "5px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>
                            <div style={{ maxHeight: "45px", marginBottom: "10px", marginTop: "20px" }}>
                                <ListGroup horizontal className="nchange_13" >
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }} >My cart</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green" }}>Delivery Address</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none" }}>Date & Time</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none" }}>Payment</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                        <div className="bordercart" >
                            <MDBRow>
                                <MDBCol md="4" style={{ marginBottom: '25px', marginTop: '37px' }}>
                                    {userdata.map((elem, index) => (
                                        <div>
                                            <img src={homeIcon1} style={{ marginLeft: '21px' }} />

                                            {['radio'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3" style={{ marginLeft: '130px' }}>
                                                    <Form.Check
                                                        inline
                                                        label={elem.type}
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                        value={elem.location}

                                                        onChange={(e) => setloc(`${elem.type}`)}
                                                    />



                                                    <p style={{ fontSize: '14px', color: '#222222', marginLeft: '20px' }}>{elem.location}</p>

                                                </div>
                                            ))}

                                        </div>
                                    ))}
                                </MDBCol>
                                <MDBCol md="4" style={{ marginTop: '50px', marginLeft: '90px' }}>

                                </MDBCol>
                                <MDBCol md="2" className="mdcolcss">
                                    {/* <p style={{ color: 'green', marginLeft: '190px', marginTop: '45px' }}>Edit</p> */}
                                    {userdata.map((elem, index) => (
                                        <div>
                                            <Editaddress />
                                        </div>
                                    ))}


                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>

                    <MDBCol md="11">
                        <div className="bordercart">
                            <MDBRow>
                                <MDBCol md="4" style={{ marginBottom: '38px', marginTop: '37px' }} >
                                    <Addaddress />
                                    
                                </MDBCol>

                            </MDBRow>
                        </div>
                    </MDBCol>
                    <MDBCol md="11" >
                        <div className="bordercart1">
                            <MDBRow>



                                <MDBCol md="12" style={{ marginTop: '240px', marginLeft: '80px' }} >

                                    {/* <ShippingDetail type_id={elem.type}  /> */}
                                    <Button variant="success" style={{ padding: '10px 100px', borderRadius: '8px 8px 8px 8px', float: 'right', marginRight: '80px' }} onClick={handlepage} >
                                        Confirm Address
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
export default Mobileverification