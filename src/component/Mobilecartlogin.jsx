import axios from 'axios';
import React, { useRef } from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Col } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { mobilesign } from "../lib/utils";
import Loginsuccess from './Loginsuccess';



const Mobilecartlogin = (props) => {
    console.log("props data", props);
    const [modalShow, setModalShow] = React.useState(true);
    const [data, setData] = useState(false);
    const [userdata, setuserdata] = useState([]);



    let textInput = React.createRef();
    let textinput1 = useRef(null);
    let textinput2 = useRef(null);
    let textinput3 = useRef(null);
    let textinput4 = useRef(null);

    let onOnclickHandler = (e) => {
        e.preventDefault();
        console.log("api data otp", textinput1.current.value)
        let otp = textinput1.current.value + textinput2.current.value + textinput3.current.value + textinput4.current.value;
        console.log("otp value", otp);
        axios.post(`https://market.jprtechnosoft.com/api/otpverified?otp=${otp}&phone=${props.mobile}`)
            .then(res => {
                console.log("response api", res);
                setuserdata(res.data.otp);
                localStorage.setItem('customer_id', res.data.data.id);
            })
        setData(true);
        console.log("input value", textinput1.current.value);
    };


    const MyVerticallyCenteredModal = (props) => {
        return (



            <Modal style={{ borderRadius: '16px 16px 16px 16px' ,width:"350px", marginLeft:"450px" }}
                {...props}

                centered
            >
                <Modal.Header
                    closeButton  >

                </Modal.Header>
                <span style={{ textAlign: 'center', fontSize: '16px', color: '#000000', fontWeight: 'bold' }}>Mobile verification</span>

                <Modal.Body>

                    <p style={{ marginLeft: '30px', fontSize: '14px', color: '#000000', fontWeight: 'Nunito' }}>Enter 4 digit code sent to mobile number</p>
                    {userdata.map((elem, index) => (
                        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '16px', color: '#000000', fontWeight: 'Nunito' }}>
                            {elem.name}
                        </p>
                    ))}
                    <Form onSubmit={onOnclickHandler}  >
                        <Form.Row style={{ marginLeft: '90px' }}>
                            <Col xs={2}  >
                                <Form.Control class="textinput" ref={textinput1} />
                            </Col>
                            <Col xs={2}>
                                <Form.Control class="textinput" ref={textinput2} />
                            </Col>
                            <Col xs={2}>
                                <Form.Control class="textinput" ref={textinput3} />
                            </Col>
                            <Col xs={2}>
                                <Form.Control class="textinput" ref={textinput4} />
                            </Col>
                        </Form.Row>
                    </Form>
                    <center><Button onClick={onOnclickHandler} variant="success" style={{ marginTop: '40px', padding: '10px 130px', marginBottom: '20px', borderRadius: '8px 8px 8px 8px' }}>
                        Verify
      </Button></center>
                </Modal.Body>

            </Modal>
        );
    }

    const secondPage = () => {
        return (
            <>
                <Loginsuccess />
            </>
        )
    }



    return (
        <>
            {/* <p onClick={() => setModalShow(true)}>Login/SignUp */}
            {/* </p> */}
            { data ? secondPage() : <><MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></>}


        </>
    );
}
export default Mobilecartlogin  