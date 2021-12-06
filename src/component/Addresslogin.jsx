import React, { useEffect } from 'react';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { mobileno, order, address, logout, homeIcon1, plusadd } from "../lib/utils";
import { useState } from 'react';
import Addaddress from './Addaddress';
import axios from 'axios';
import Editaddress from './Editaddress';
function Addresslogin() {
    const [data, setdata] = useState(false)
    const addsignpage = () => {
        setdata(true)
        window.location.href = 'addressone'
    }
    const myorderpage = () => {
        setdata(true)
        window.location.href = 'account'
    }
    const [userdata, setUserdata] = useState([]);
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

    return (
        <div>
            <HamburgerMenu />
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="2" style={{ marginLeft: '150px', boxShadow: '0px 3px 6px #00000014', marginTop: '80px' }}>
                        <div style={{ marginRight: '-107px', marginLeft: '-192px' }}>
                        </div>
                        <div style={{ marginTop: '23px', marginBottom: '10px', }}>
                            <img src={mobileno} />
                            <span className="text_item" >+91-7835332564</span>
                        </div>
                    </MDBCol>
                    <MDBCol md="8">
                        <div className="bordercart_address" >
                            <MDBRow>
                                <MDBCol md="4" style={{ marginBottom: '25px', marginTop: '37px', marginTop: '80px' }}>
                                    {userdata.map((elem, index) => (
                                        <div>
                                            <img src={homeIcon1} style={{ marginLeft: '21px' }} />

                                            <span style={{ marginLeft: '17px', color: '#222222', font: 'bold', fontSize: '14px' }}>{elem.type}</span>
                                            <p style={{ marginLeft: '120px', fontSize: '14px', color: '#222222' }}>{elem.location}</p>
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

                    <MDBCol md="2" style={{ marginLeft: '150px', boxShadow: '0px 3px 6px #00000014', marginTop: '30px' }}>
                        <div style={{ height: '700px' }}>
                            <img src={order} />
                            <span className="text_item" onClick={myorderpage}  >MyOrder</span>
                            <hr />
                            <div style={{ marginTop: '45px' }}>
                                <img src={address} />
                                <span className="text_item" style={{ color: '#03A305' }} onClick={addsignpage} >MyAddress</span>
                                <hr />

                            </div>
                            <div style={{ marginTop: '45px' }}>
                                <img src={logout} />
                                <span className="text_item"  >Logout</span>
                            </div>
                        </div>
                    </MDBCol>

                    <MDBCol md="8" style={{ boxShadow: '0px 3px 6px #00000014', marginTop: '30px', marginLeft: '20px', height: '80px' }}>
                        <div style={{ marginTop: '25px', marginBottom: '40px' }}>
                            {/* <img src={plusadd} /> */}
                            <span style={{ marginLeft: '35px', fontSize: '14px', color: '#03A305' }}><Addaddress /> </span>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>




        </div>
    );
}

export default Addresslogin;
