import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Modal, Form } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { mobilesign } from "../lib/utils";
import Mobilecartlogin from './Mobilecartlogin';

const Login = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState(false);
    const [userdata, setuserdata] = useState([]);
    const [mobile, setMobile] = useState(null);

    let textInput = React.createRef();
   

    let onOnclickHandler = (event) => {

        axios.post(`https://market.jprtechnosoft.com/api/sendotp?phone=${textInput.current.value}`)
            .then(res => {
                console.log("response api", res);
                setuserdata(res.data.phone);
                // console.log("data api mobile",res.data.phone);
                localStorage.setItem('session_id',res.data.session_id)
                console.log("session_id store",res.data.session_id);
            })
        setData(true);
        setMobile(textInput.current.value)
        console.log("mobile data api",textInput.current.value);
    };


    const MyVerticallyCenteredModal = (props) => {
        return (
            <Modal style={{ borderRadius: '16px 16px 16px 16px' ,width:"350px", marginLeft:"450px" }}
                {...props}
                centered

            >
                <Modal.Header closeButton >
                </Modal.Header>
                <p style={{ textAlign: 'center', color: '#000000', fontSize: '14px', fontWeight: 'bold' }}>Login/Sign Up</p>

                <Modal.Body>
                    <p style={{ font: 'Nunito', textAlign: 'center', color: '#000000', fontSize: '14px' }}>Enter Your Mobile number</p>
                    <button style={{ marginLeft: '00px', padding: '5px 0px', color: '#EFF1F3', borderRadius: '8px 8px 8px 8px', border: 'none' }}>
                        <img src={mobilesign} className="form-control-sm" />
                        <span style={{ fontSize: '14px', color: '#222222', marginRight: '10px', width: '79px', height: '48px' }}>+91</span>
                    </button>

                    <input type="text"
                        placeholder="Enter the Number"
                        ref={textInput}

                        style={{ marginLeft: '10px', borderRadius: '8px 8px 8px 8px', fontWeight: '14px', width: '211px', height: '48px' }}></input>


                    <Button onClick={onOnclickHandler} variant="success" style={{ padding: '10px 50px', marginLeft: '100px', marginTop: '20px', borderRadius: '8px 8px 8px 8px' }}>
                        Get OTP
      </Button>

                </Modal.Body>



            </Modal>

        );
    }

    const secondPage = () => {
        return (

            <>
                <Mobilecartlogin mobile={mobile} />
            </>

        )
    }



    return (
        <>

            <p onClick={() => setModalShow(true)}>Login/SignUp</p>



            { data ? secondPage() : <><MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></>}

        </>
    );
}
export default Login  