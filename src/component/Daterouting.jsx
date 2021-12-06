import React, { useEffect, useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBNav } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ListGroup } from "react-bootstrap"
import HamburgerMenu from '../container/menu/HamburgerMenu';
import { useState } from 'react';
import { logged } from "../lib/utils";
import axios from 'axios';
const Daterouting = () => {
    var [date, setDate] = useState(new Date());
    const [data, showdata] = useState(true)
    const [name, setName] = useState('');
    const [datetime, setdate] = useState('');
    const [slotTime, setSlotTime] = useState('');




    const handleppage = (e) => {
        showdata(false);
        window.location.href = '/pay';
        localStorage.setItem('Name', name);

        localStorage.setItem('date', datetime);
        localStorage.setItem('slottime', slotTime);


    }

    const [userdata, setUserdata] = useState([]);
    const [userdata1, setUserdata1] = useState([]);


    useEffect(() => {

        const Customer = localStorage.getItem('customer_id');
        console.log("id mobile", Customer)
        axios.post(`https://market.jprtechnosoft.com/api/getdeliveryoption?customer_id=${Customer}`)
            .then(res => {
                console.log("responce date and time", res);
                setUserdata(res.data.result.deliveryOption);
                setUserdata1(res.data.result.deliveryOption.interval);
                console.log("data value data", res.data.result.interval);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])




    return (
        <>
            <HamburgerMenu />
            <MDBContainer fluid className="text-center text-md-left" className="mdcolcss1">
                <MDBRow>
                    <MDBCol md="11">
                        <div style={{ marginLeft: '150px', marginTop: "70px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>
                            <div style={{ maxHeight: "45px", marginBottom: "10px", marginTop: "20px" }}>
                                <ListGroup horizontal className="nchange_13" >
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>My cart</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>Delivery Address</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>Date & Time</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none" }}>Payment</ListGroup.Item>
                                </ListGroup>
                            </div>

                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                        <div style={{ marginLeft: '150px', marginTop: "5px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>

                            <MDBRow>


                                <MDBCol md="12" className="mdcolcss">
                                    <p style={{ marginLeft: '32px', marginTop: '12px', fontSize: '16px', color: '#000000', fontWeight: 'Nunito' }}>Delivery Slot</p>
                                    <MDBNav classicTabs style={{ marginTop: '20px', fontSize: '14px', color: '#000000' }}>



                                        {['radio'].map((name) => (
                                            <div key={`inline-${name}`} className="mb-2">
                                                <Form.Check
                                                    inline
                                                    type={name}
                                                    value="Mon"
                                                    // id={`default-${name}`}
                                                    id={`inline-${name}-1`}
                                                    name="group1"
                                                    label={`Mon`}
                                                    onChange={(e) => setName(e.target.value)}

                                                />
                                            </div>
                                        ))}




                                        {['radio'].map((name) => (
                                            <div key={`inline-${name}`} className="mb-2" style={{ marginLeft: '170px' }}>
                                                <Form.Check
                                                    inline
                                                    type={name}
                                                    value="Tue"
                                                    id={`inline-${name}-1`}
                                                    name="group1"
                                                    label={`Tue`}
                                                    onChange={(e) => setName(e.target.value)}

                                                />
                                            </div>
                                        ))}

                                        {['radio'].map((name) => (
                                            <div key={`inline-${name}`} className="mb-2" style={{ marginLeft: '180px' }}>
                                                <Form.Check
                                                    inline
                                                    type={name}
                                                    name="group1"
                                                    id={`inline-${name}-1`}
                                                    label={`Wed`}
                                                    value="Wed"
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        ))}
                                        {['radio'].map((name) => (
                                            <div key={`inline-${name}`} className="mb-2" style={{ marginLeft: '180px' }}>
                                                <Form.Check
                                                    inline
                                                    type={name}
                                                    name="group1"
                                                    id={`inline-${name}-1`}
                                                    value="Thu"
                                                    label={`Thu`}
                                                    onChange={(e) => setName(e.target.value)}

                                                />
                                            </div>
                                        ))}
                                        {['radio'].map((name) => (
                                            <div key={`inline-${name}`} className="mb-2" style={{ marginLeft: '150px' }}>
                                                <Form.Check
                                                    inline
                                                    type={name}
                                                    name="group1"
                                                    id={`inline-${name}-1`}
                                                    label={`Fri`}
                                                    value="Fri"
                                                    onChange={(e) => setName(e.target.value)}

                                                />
                                            </div>
                                        ))}
                                        {['radio'].map((name) => (
                                            <div key={`inline-${name}`} className="mb-2" style={{ marginLeft: '150px' }}>
                                                <Form.Check
                                                    type={name}
                                                    inline
                                                    name="group1"

                                                    label={`Sat`}
                                                    id={`inline-${name}-1`}
                                                    value="Sat"
                                                    onChange={(e) => setName(e.target.value)}

                                                />
                                            </div>
                                        ))}
                                        {['radio'].map((name) => (
                                            <div key={`inline-${name}`} className="mb-2" style={{ marginLeft: '110px' }}>
                                                <Form.Check
                                                    type={name}
                                                    name="group1"
                                                    inline
                                                    id={`inline-${name}-1`}
                                                    label={`Sun`}
                                                    value="Sun"
                                                    onChange={(e) => setName(e.target.value)}

                                                />
                                            </div>
                                        ))}



                                    </MDBNav>
                                </MDBCol>

                            </MDBRow>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11" >
                        <div style={{ marginLeft: '0px', marginTop: "5px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px', height: '500px' }}>
                            <MDBRow>
                                <MDBCol md="12" >

                                    <MDBNav classicTabs color="orange" style={{ fontSize: '16px', color: '#222222', marginLeft: '155px' }}>

                                        {userdata.map((elem, index) => (
                                            <div>
                                                {['checkbox'].map((datetime) => (
                                                    <div key={`default-${datetime}`} className="mb-2" style={{ marginLeft: '80px' }} >
                                                        <Form.Check
                                                            type={datetime}
                                                            value={elem.date_interval}
                                                            id={`default-${datetime}`}
                                                            label={elem.date_interval}
                                                            onChange={(e) => setdate(e.target.value)}


                                                            
                                                        />
                                                    </div>
                                                ))}

                                                <div style={{ marginTop: '15px', marginLeft: '75px' }}>


                                                    <div>
                                                        {elem.interval.map((val, index) => (


                                                            <Button variant="outline-success" style={{ marginLeft: '10px', fontSize: '14px', width: '180px', marginBottom: '20px', height: '50px' }} >
                                                                {val.slot_name}
                                                                <span style={{ float: 'right' }}>

                                                                    {['radio'].map((slotTime) => (
                                                                        <div key={`inline-${slotTime}`} >
                                                                            <Form.Check
                                                                                type={slotTime}
                                                                                value={val.slot_name}
                                                                                id={`inline-${slotTime}-4`}
                                                                                name="formHorizontalRadios"
                                                                                onChange={(e) => setSlotTime(e.target.value)}


                                                                            />
                                                                        </div>
                                                                    ))}
                                                                </span>

                                                            </Button>
                                                        ))}


                                                    </div>

                                                </div>
                                            </div>

                                        ))}

                                    </MDBNav>
                                </MDBCol>


                                <div style={{ marginLeft: '700px', marginTop: '100px', float: 'right', marginBottom: '30px' }}>
                                    <Button variant="success" style={{ padding: '10px 120px', borderRadius: '8px 8px 8px 8px' }} onClick={handleppage} >
                                        Next
  </Button>
                                </div>
                            </MDBRow>
                        </div>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>






        </>
    )
};
export default Daterouting