import React, { useEffect } from 'react';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { mobileno, order, address, logout } from "../lib/utils";
import { useState } from 'react';
import axios from 'axios';
function Accountorder() {
    const [data, setdata] = useState(false);
    const [userdata, setUserdata] = useState([]);

    const orderpage = () => {
        setdata(true);
        window.location.href = 'addressone'
    }
    const myorderpage = () => {
        setdata(true)
        window.location.href = 'account'
    }

    useEffect(() => {

        const Customer = localStorage.getItem('customer_id');
        console.log("id mobile", Customer)
        axios.post(`https://market.jprtechnosoft.com/api/orderhistory?customer_id=${Customer}`)
            .then(res => {
                console.log("responce order history ", res);
                setUserdata(res.data.result);

            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <HamburgerMenu />
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="2" style={{ marginLeft: '150px', boxShadow: '0px 3px 6px #00000014', marginTop: '100px', marginBottom: '30px' }}>
                        <div style={{ marginTop: '23px', marginBottom: '-10px' }}>
                            <img src={mobileno} />
                            <span className="text_item" >+91-7835332564</span>
                        </div>
                    </MDBCol>
                    <MDBCol md="8" style={{ boxShadow: '0px 3px 6px #00000014', marginTop: '100px', marginLeft: '20px' }}>
                    {userdata.map((elem, index) => (
<div>
                        <h5 style={{ marginTop: '14px', marginRight: '20px', fontSize: '14px', color: '#222222', fontWeight: 'bold' }}>{elem.date_added}</h5>

                        <span style={{ marginRight: '20px', fontSize: '14px', fontWeight: 'Nunito' }}>{elem.total_item} Items</span>
                        <span style={{ float: 'right', marginRight: '100px', fontSize: '16px', color: '#03A305' }}>Repeat
<span style={{ marginLeft: '50px', color: '#E00000' }}>Remove</span>
                        </span>
                        <p style={{ marginRight: '20px', fontSize: '14px', color: '#222222', fontWeight: 'Nunito', marginTop: '12px' }}>Total Amount: <span style={{ marginLeft: '28px', fontSize: '14px', color: '#222222', fontWeight: 'Nunito', marginTop: '12px' }}>{elem.discount}</span></p>
                        </div>
                    ))}
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="2" style={{ marginLeft: '150px', boxShadow: '0px 3px 6px #00000014', marginTop: '30px', height: '700px' }}>
                        <img src={order} />
                        <span className="text_item" style={{ color: '#03A305' }} onClick={myorderpage} >MyOrder</span>
                        <hr />
                        <div style={{ marginTop: '45px' }}>
                            <img src={address} />
                            <span className="text_item" onClick={orderpage}  >MyAddress</span>
                            <hr />

                        </div>
                        <div style={{ marginTop: '45px' }}>
                            <img src={logout} />
                            <span className="text_item"  >Logout</span>
                        </div>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </div>
    );
}

export default Accountorder;
