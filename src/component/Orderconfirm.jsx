import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Col } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { mobilesign } from "../lib/utils";
import { logged } from "../lib/utils";
import Mainfile from './Mainfile';



const Orderconfirm = () => {
    const [modalShow, setModalShow] = React.useState(true);
    const [data, setData] = useState(false);


    
    const bgChange = () => {
        setData(false)
        window.location.href = 'orderconfirm'
    }

    const MyVerticallyCenteredModal = (props) => {
        return (



            <Modal style={{ borderRadius: '16px 16px 16px 16px' }}
                {...props}

                centered
            >

                <Modal.Title style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '36px', fontSize: '16px', color: '#03A305' }}>
                    <span>Order Confirmed</span>
                </Modal.Title>

                <Modal.Body>
                    <img src={logged} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '43.33', width: '50px' }} />
                    <center><Button variant="success" onClick={bgChange} style={{ marginTop: '43.33px', padding: '10px 70px', marginBottom: '20px', fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF', borderRadius: '8px 8px 8px 8px' }}>
                        Continue Shopping
      </Button></center>
                </Modal.Body>

            </Modal>

        );
    }

    const secondPage = () => {
        return (
            <>

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
export default Orderconfirm  