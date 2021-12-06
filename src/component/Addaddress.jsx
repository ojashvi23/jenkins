import React, { useRef } from 'react'
import { Button, Modal, Form, Col, InputGroup, FormControl } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { mobilesign } from "../lib/utils";
import AddIcon from '@material-ui/icons/Add';
import { SpaRounded } from '@material-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import Autoplace from './Autoplace';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
function Addaddress(props) {

    const [modalShow, setModalShow] = React.useState(false);
    const [userdata, setuserdata] = useState([]);
    let textinput1 = useRef(null);
    let textinput2 = useRef(null);
    let textinput3 = useRef(null);
    let textinput4 = useRef(null);
    let textinput5 = useRef(null);
    let textinput6 = useRef(null);

    let onOnclickHandler = (e) => {
        e.preventDefault();
        const Customer = localStorage.getItem('customer_id');
        console.log("customer id", Customer)
        let type_value = textinput4.current.value;
        console.log("type  api data", type_value);
        let name_value = textinput2.current.value;
        console.log(" name api data ", name_value);
        // let location_value = textinput1.current.value;
        // console.log("location api data ", location_value);
        const location_value = localStorage.getItem('address');

        let address_value = textinput3.current.value;
        console.log("address api data", address_value);
        axios.post(`https://market.jprtechnosoft.com/api/getdeliveryaddress?customer_id=${Customer}&type=${type_value}&full_name=${name_value}&location=${location_value}&address=${address_value}`)
            .then(res => {
                console.log("response api add address", res);
                setuserdata(res.data.otp);
            })

    };

    return (
        <>
            <Button variant="outline-success" style={{ marginLeft: '70px' }}><AddIcon />
            </Button >{' '}
            <span style={{ color: 'green', marginLeft: '40px' }} onClick={() => setModalShow(true)}>Add Another/New Address</span>


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );

    function MyVerticallyCenteredModal(props) {

        return (
            <>
                <div style={{ borderRadius: '20px 8px 8px 20px' }}>
                    <Modal
                        {...props}
                        centered
                    >


                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter"
                                style={{ fontWeight: 'bold', padding: '0px 130px', marginTop: '30px', fontSize: '20px', color: '#03A305' }}>
                                Add New Address
          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{ fontSize: '16px', color: '#222222', marginLeft: '29px' }} >
                                Enter Accurate Address To Get Delivery Fast To Your Door
                             </p>
                            <Form onSubmit={onOnclickHandler}>
                                <Form.Row className="align-items-center">
                                    <Col ls="auto">
                                        <Form.Label style={{ marginTop: '10px', marginLeft: '7px', fontSize: '14px', color: '#222222' }}>
                                            Area/Locality
                                        </Form.Label>

                                        {/* <Form.Control style={{ marginLeft: '7px' }}
                                            className="mb-2"
                                            placeholder="Search Area"
                                            ref={textinput1}
                                        /> */}
                                        <Autoplace  />
                                        
                                    </Col>
                                    <Col xs="auto">
                                        <Button variant="outline-success" style={{ marginTop: '32px', marginLeft: '15px' }}>
                                            Get Location
                                    </Button>{' '}
                                    </Col>
                                </Form.Row>
                                <Form.Group >
                                    <Form.Label style={{ marginTop: '28px', marginLeft: '7px', fontSize: '14px', color: '#222222' }}>
                                        Full Name
                                    </Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Full Name"
                                        style={{ marginLeft: '7px' }}
                                        ref={textinput2}
                                    />

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{ marginTop: '25px', marginLeft: '7px', fontSize: '14px', color: '#222222' }}>
                                        Complete Address
                                    </Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enetr Complete Address"
                                        style={{ marginLeft: '7px' }}
                                        ref={textinput3}
                                    />
                                </Form.Group>
                                <div style={{ marginTop: '35px', marginLeft: '7px' }}>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline Label="1"
                                                type={type} id={`inline-${type}-1`}
                                                name="formHorizontalRadios"
                                                ref={textinput4}
                                                value="Home"
                                            />Home
                                            <Form.Check inline Label="1"
                                                type={type} id={`inline-${type}-1`}
                                                style={{ marginLeft: '35px' }}
                                                name="formHorizontalRadios"
                                                ref={textinput4}
                                                value="Office"
                                            />Office
                                            <Form.Check inline Label="1"
                                                type={type} id={`inline-${type}-1`}
                                                style={{ marginLeft: '35px' }}
                                                name="formHorizontalRadios"
                                                ref={textinput4}
                                                value="Other"
                                            />Other
                                        </div>
                                    ))}
                                </div>

                                <center>
                                    <Button variant="success" onClick={onOnclickHandler} style={{ padding: '10px 60px', marginTop: '35px', borderRadius: '8px 8px 8px 8px' }}>
                                        Continue Shopping
                                        </Button>
                                </center>

                            </Form>

                        </Modal.Body>


                    </Modal>
                </div>
            </>
        );
    }

}
export default Addaddress  