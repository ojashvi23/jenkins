import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { logged } from "../lib/utils";
import Myaccount from './Myaccount';
import   Login from "./Login";
import Mobilecartlogin from './Mobilecartlogin';
const Loginsuccess = () => {
    const [modalShow, setModalShow] = React.useState(true);
    const [data, setData] = useState(false);
    

    const bgChange = () => {
        setData(true);
        {setData ? <Myaccount /> : <Login />}
    }

    const MyVerticallyCenteredModal = (props) => {
        return (
            <Modal style={{ borderRadius: '16px 16px 16px 16px' ,width:"350px", marginLeft:"450px" }}
                {...props}

                centered
            >
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <p style={{ color: 'green', fontWeight: '12px', marginTop: '20px',textAlign:'center',fontWeight:'bold' }}>Logged in Successful</p>

                <Modal.Body>
                    <img src={logged} className="img_log" />


                    <Button onClick={bgChange} variant="success" style={{ marginTop: '40px', padding: '10px 50px', marginLeft: '40px', marginBottom: '20px',borderRadius:'8px 8px 8px 8px' }}>
                        Continue Shopping
      </Button>
                </Modal.Body>

            </Modal>
        );
    }

    const secondPage = () => {
        return (

            <>
                {/* <Myaccount /> */}

                {/* {elem.discount != 0 ? <p style={{ marginLeft: '276px', color: 'green', fontSize: '14px', lineHeight: '0.2' }}>{elem.regular_price}
                        <span className="MRP_cart_routing" style={{ color: 'black' }}>MRP:{elem.price}</span><span style={{ marginLeft: '10px', fontSize: '14px' }}>Save {Math.round(elem.discount * elem.price / 100)}</span>

                      </p> : <span style={{ color: 'black', marginLeft: '280px' }}>MRP:{elem.price}</span>
                      } */}
                      {<Loginsuccess /> ? <Myaccount /> :<Mobilecartlogin onHide={() => setModalShow(false)} /> }
            </>

        )
    }

    return (
        <>
            { data ? secondPage() : <><MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></>}

        </>
    );
}
export default Loginsuccess 