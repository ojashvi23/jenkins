import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap"
import { redlabel, share, Daily_deals, redteaimg, redteaimg1, redteaimg2,redlabel1,redlabel2,redlabel4 } from "../lib/utils";
import { } from "../lib/Redlabelimage";
import Readmorechilli from './Readmorechilli';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import MenuBottom from '../container/MenuBottom';
import Similarimage from "../lib/Similarimage";
import Similar_product from './Similar_product';
import Footer from './Footer';

const RedLabelchilli = (props) => {
    return (
        <>
            <HamburgerMenu />
            <MenuBottom />


            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBRow>

                        <ul>

                            <li>  <img src={redlabel1} className="redtea" style={{ marginTop: '25px', marginBottom: '-16px' }} /></li>
                        </ul>
                        <ul>
                            <li><img src={redlabel2} className="redtea" style={{ marginBottom: '-16px' }} /></li>

                        </ul>
                        <ul>
                            <li><img src={redlabel} className="redtea" style={{ marginBottom: '-16px' }} /></li>

                        </ul> <ul>
                            <li><img src={redlabel4} className="redtea" /></li>

                        </ul>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="2">
                            <div >
                                <img src={redlabel} style={{ borderColor: '#707070', border: '0.2px solid', borderRadius: '2px 2px 2px 2px', marginTop: '32px', width: '380px', height: '432px', width: '380', marginLeft: '-358px' }} />
                            </div>
                        </MDBCol>
                    </MDBRow>



                    <MDBCol md="5">
                        <div style={{ marginTop: '30px' }}>
                            <span style={{ marginLeft: '20px', fontSize: '14px', color: '#000000' }} >Home</span>
                            <span style={{ marginLeft: '20px', fontSize: '14px', color: '#000000' }} >Daily Deals</span>

                        </div>
                        <h4 style={{ marginLeft: '24px', marginTop: '24px', fontSize: '24px', color: '#222222', fontWeight: 'bold' }} >Red Label Tea Leaf, 1kg
                            <span style={{ marginLeft: '20px' }} ><img src={share} /></span>

                        </h4>

                        <div style={{ marginTop: '24px' }}>
                            <span style={{ marginLeft: '24px', color: '#03A305', fontWeight: 'bold', marginLeft: '24px', marginTop: '24px', fontSize: '20px' }}>₹ 476</span>
                            <span style={{ marginLeft: '9px', textDecoration: 'line-through', fontSize: '14px' }}>MRP: ₹ 490</span>
                            <span style={{ marginLeft: '9px', color: 'green', fontSize: '14px' }}>Save ₹ 14</span>

                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <Button variant="outline-success" style={{ marginLeft: '24px', marginTop: '15px', fontSize: '14px' }}> 1 Kg</Button>{' '}
                            <Button variant="outline-success" style={{ marginLeft: '15px', marginTop: '15px', fontSize: '14px' }}>500gm</Button>{' '}
                            <Button variant="outline-success" style={{ marginLeft: '15px', marginTop: '15px', fontSize: '14px' }}>500gm</Button>{' '}
                        </div>
                        <Button variant="success" style={{ marginLeft: '24px', marginTop: '20px', padding: '10px 35px', fontSize: '16px', color: '#FFFFFF', fontWeight: 'bold' }}>
                            Add To Cart
                            <img src={Daily_deals} style={{ marginLeft: '30px',background:'white' }} />
                        </Button>{' '}
                        <h6 style={{ marginLeft: '24px', marginTop: '20px', fontWeight: 'bold', color: '#222222', fontSize: '16px' }}>Services</h6>
                        <div style={{ marginLeft: '24px', marginTop: '20px' }}>
                            <img src={redteaimg} />
                            <span style={{ marginLeft: '13.33px', fontSize: '14px' }} >
                                Schedule your deilvery
                            </span>
                            <img src={redteaimg1} style={{ marginLeft: '40.67px' }} />
                            <span style={{ marginLeft: '12.32px', fontSize: '14px' }} >
                                Cash on delivery availabe
                            </span>



                        </div>
                        <div style={{ marginLeft: '24px', marginTop: '15px', fontSize: '14px' }}>
                            <img src={redteaimg2} />
                            <span style={{ marginLeft: '15px' }}>
                                Easy Doorstep Return
                            </span>
                        </div>
                        {/* <div style={{ marginLeft: '20px', marginTop: '15px', fontSize: '14px' }}>
                            <h5 style={{ fontWeight: 'bold', fontSize: '16px', color: '#222222' }}>Description</h5>
                            <p>Enjoy and share a healthy cup of Brooke Bond Red Label tea     <span style={{ fontWeight: 'bold', fontSize: '14px' }}>View more </span></p>

                        </div> */}

                    </MDBCol>
                    <MDBCol md="2">
                        <div style={{ marginTop: '30px' }}>
                            <h5 style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '20px', color: '#000000' }} >Beverages</h5>
                            <hr />
                            <p style={{ marginLeft: '20px', fontWeight: 'Nunito', fontSize: '16px', color: '#000000' }}>Cold Drinks</p>
                            <hr />
                            <p style={{ marginLeft: '20px', fontWeight: 'Nunito', fontSize: '16px', color: '#000000' }}>Tea & Coffee</p>
                            <hr />
                            <p style={{ marginLeft: '20px', fontWeight: 'Nunito', fontSize: '16px', color: '#000000' }}>Juices & Drinks</p>
                            <hr />
                            <p style={{ marginLeft: '20px', fontWeight: 'Nunito', fontSize: '16px', color: '#000000' }}>Healthy Energy Drinks</p>
                            <hr />
                            <p style={{ marginLeft: '20px', fontWeight: 'Nunito', fontSize: '16px', color: '#000000' }}>Spices</p>


                        </div>

                    </MDBCol>

                    <MDBCol md="6">
                        <div style={{ marginLeft: '20px', marginTop: '15px', fontSize: '14px' }}>
                            <h5 style={{ fontWeight: 'bold', fontSize: '16px', color: '#222222' }}>Description</h5>
                            <span style={{ fontSize: '14px' }}>Enjoy and share a healthy cup of Brooke Bond Red Label tea <Readmorechilli /> </span>

                        </div>



                    </MDBCol>
                    <MDBCol md="12">
                    <div style={{color: '#FFFFFF', marginTop: '35px',boxShadow: '0px 1px 8px  #00000014',padding:'10px' }}>

                        <h2 style={{ marginTop: '40px', marginLeft: '40px', fontSize: '28px', fontWeight: 'bold', color: '#000000' }}>Similar Product
 <Button variant="success" style={{ float: 'right', marginRight: '22px', fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF' }} >View All</Button></h2>
 </div>
                        {Similarimage.map(product)}
                        <Footer />

                    </MDBCol>
                </MDBRow>


            </MDBContainer>
        </>
    )
}

function product(val) {
    return (
        <Similar_product
            imgValue={val.imgValue}
            item1={val.item1}
            price={val.price}
            save={val.save}
            MRP={val.MRP}
            rating={val.rating}
            seller={val.seller}

        />
    );
};
export default RedLabelchilli





