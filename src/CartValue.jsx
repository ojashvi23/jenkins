import React, { useEffect, useRef, useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap"
import { } from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { cartvalue, maggiImage, deleteImage } from "./lib/utils";
import { minus, pay, minusbutton, Plusbutton, cross } from "./lib/utils";
import CloseIcon from '@material-ui/icons/Close';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import axios from "axios";
import Updateapi from "./component/Updateapi";
import Deletecard from "./component/Deletecard";

// import Navbar from "./component/Navbar";

const CartValue = (props) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [userdata, setUserdata] = useState([]);
    const [data, setData] = useState(true);
    const [valuedata, setvauledata] = useState([]);
    const [itemDelete, setItemDelete] = useState([]);

    const ref = useRef(null);

    const [deldata, setdeldata] = useState(true);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    const handlePage = () => {
        setData(false);
        window.location.href = '/cart'
    }

    useEffect(() => {

        const Customer = localStorage.getItem('customer_id');
        //  console.log("id mobile",pro_id)
        axios.post(`https://market.jprtechnosoft.com/api/gettocard?customer_id=${Customer}`)
            .then(res => {
                console.log("responce api show card api", res);
                console.log("hii");
                setUserdata(res.data.result.cart_info);
                setvauledata(res.data.result);
                console.log("total price", res.data.result);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // const deleteclick = () => {
    // const product1 = `${itemDelete}`;
    // console.log("data props", product1);
    // const cartitem_id=props.cartid;
    // console.log("cart_id",cartitem_id);
    // const Customer = localStorage.getItem('customer_id');
    // axios.post(`http://13.126.77.1/api/removefromcart?cart_id=${cartitem_id}&product_id=${product1}&customer_id=${Customer}`)
    //   .then(res => {
    //     console.log("responce api deleteitem", res);
    //     setdeldata(res.data.result);
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // }
   

    return (
        <>
            <div ref={ref}>
                <p onClick={handleClick}

                >Cart</p>

                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref.current}
                    containerPadding={10}

                >
                    <Popover id="popover-contained"  >
                        <Popover.Title as="h2" style={{ background: '#03A305', color: 'white', width: '505px', padding: '15px' }}>
                            <img src={cartvalue} />

                            <span style={{ fontSize: '12px', color: '#FFFFFF', fontSize: 'bold' }} >My Cart</span>
                            <img src={cross} style={{ float: 'right' }} />
                        </Popover.Title>
                        <Popover.Content style={{ width: '505px', background: 'white' }}>
                            <div style={{ borderRadius: '1px 1px 1px 1px', boxShadow: '0px 2px 8px  #00000014', paddingBottom: '0px' }}>
                                {userdata.map((elem, index) => (
                                    <div>
                                        <p style={{ marginTop: '10px' }} >
                                            <strong >
                                                <img src={elem.product_image} style={{ height: '60px' }} />
                                            </strong>
                                            {elem.product_title}
                                            {/* {elem.product_id} */}
                                            
                                           <Deletecard prouct={elem.product_id} cartid={elem.cart_id} />
                                            {/* {setItemDelete(`${elem.product_id}`)} */}
                                            {/* <img src={deleteImage} style={{ float:'right'}}  onClick={deleteclick}  /> */}

                                        </p>
                                        {/* <img src={minusbutton}  style={{ marginLeft: '76px' }} />
                        <span style={{ marginLeft: '15px' }}>{elem.quantity}</span>
                        <img src={Plusbutton} style={{ marginLeft: '15px' }}/> */}
                                        <Updateapi prouct={elem.product_id}
                                        />
                                        <span style={{ marginLeft: '250px' }}>{elem.regular_price}</span>
                                        <span style={{ marginLeft: '180px', fontWeight: 'bold', fontSize: '14px', color: '#222222' }}>{elem.quantity * elem.regular_price}</span>
                                    </div>
                                ))}
                            </div>
                        </Popover.Content>

                        <Popover.Content style={{ width: '505px', background: 'white' }}>
                            <div style={{ borderRadius: '2px 2px 2px 2px', paddingBottom: '16px', marginBottom: '20px' }}>


                            </div>
                        </Popover.Content>


                        <Popover.Content style={{ width: '505px', background: 'white' }}>
                            <div style={{ boxShadow: '0px 2px 8px  #00000014' }}>

                                <div>

                                    <p style={{ fontWeight: 'bold', fontSize: '14px', color: '#222222' }}> Total
                             <span style={{ float: 'right' }}>{valuedata.total_price}</span></p>
                                </div>


                                {/* <p style={{ fontWeight: 'bold', fontSize: '14px',marginTop:'13px', fontSize: '14px',color:'#222222' }}>Delivery Charges
                             <span style={{ float: 'right' }}>49 /-</span></p> */}

                            </div>
                            {/* <p style={{ fontWeight: 'bold', fontSize: '14px', fontSize: '14px',color:'#222222' }}> Total
                             <span style={{ float: 'right' }}>409 /-</span></p> */}

                        </Popover.Content>
                        <Popover.Content style={{ width: '505px', background: 'white' }}>


                            <Button variant="success" style={{ width: '490px', height: '48px' }} onClick={handlePage} >
                                <MDBRow>
                                    <MDBCol md="2" >
                                        <span style={{ marginRight: '0px', fontSize: '12px', color: '#FFFFFF', fontWeight: 'Nunito' }}>{valuedata.quantity}</span>
                                        <p style={{ width: '32', height: '16px', fontSize: '12px', fontWeight: 'Nunito', marginPadding: '20px' }}>{valuedata.total_price}</p>
                                    </MDBCol>
                                    <MDBCol md="8" style={{ marginTop: '8px' }} >
                                        <span style={{ marginRight: '0px', fontSize: '16px', color: '#FFFFFF', fontWeight: 'Nunito' }}>Proceed To Pay </span>
                                    </MDBCol>
                                    <MDBCol md="2" style={{ marginTop: '8px' }} >
                                        <img src={pay} style={{ backgroundColor: 'white' }} />
                                    </MDBCol>
                                </MDBRow>




                                {/* <span style={{ marginRight: '0px', fontSize: '12px',color:'#FFFFFF' }}>2 Items </span>
                                <p>409 /-</p>
  <span style={{fontSize:'16px',transform:'titlecase',color:'#FFFFFF'}}> Proceed To Pay</span> 
     */}
                            </Button>
                        </Popover.Content>

                    </Popover>
                </Overlay>



            </div>


        </>
    )
}
export default CartValue