import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ListGroup, Card } from "react-bootstrap"
import { moneyicon, credit, googlepay, phonepay, deposit,paytm,logged } from "../lib/utils";
import HamburgerMenu from '../container/menu/HamburgerMenu';
import Navbar from './Navbar';
import { useState } from 'react';
import Orderconfirm from "./Orderconfirm";
import axios from 'axios';
import Razorpay from "razorpay";
import shortid from "shortid";

const razorpay = new Razorpay({
    key_id: 'rzp_test_yS689osKp1ivNb',
    key_secret: 'jakouYYE09xcixE7M7xc8NI9',
  });



const loadScript = (src) => {
    return new Promise(resolve => {

    const script =document.createElement('script');
    script.src=src;
    script.onload= () => {
        resolve(true);

    }
    script.onerror = () => {
        resolve(false);
    }
    document.body.appendChild(script);
})
}
const __DEV__ = document.domain === 'localhost';


const Paymentrouting = (props) => {
    const [showtext, setshowtext] = useState(false)
        const [data, setData] = useState(true);
       


        const [name, setName] = useState('Ajay Kumar')

//     useEffect(() => {
//         const Ship_id=localStorage.getItem('shipping_id');
        
//         const slotid = localStorage.getItem('slottime');
// console.log("slot time avb",slotid);
//         const Customer = localStorage.getItem('customer_id');
//         //  console.log("id mobile",pro_id)
//         axios.post(`http://13.126.77.1/api/paymentcod?customer_id=${Customer}&shipping_id=${Ship_id}&shot_book=${slotid}&delivery_id=1`)
//             .then(res => {
//                 console.log("responce api payment data", res);
//                 setUserdata(res.data.result);
               
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, [])

//     useEffect(() => {
//         const Ship_id=localStorage.getItem('shipping_id');
        
//         const slotid = localStorage.getItem('slottime');
// console.log("slot time avb",slotid);
//         const Customer = localStorage.getItem('customer_id');
//         //  console.log("id mobile",pro_id)
//         axios.post(`http://13.126.77.1/api/razor_verify?customer_id=${Customer}&razorpay_payment=${Ship_id}&order_id=${slotid}&razorpay_order_id=1`)
//             .then(res => {
//                 console.log("responce api payment data", res);
//                 setUserdata(res.data);
               
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, [])


const [userdata, setUserdata] = useState([]);
const [valuedata, setvaluedata] = useState([]);
useEffect(() => {
    const Ship_id=localStorage.getItem('shipping_id');
    
    const slotid = localStorage.getItem('slottime');
console.log("slot time avb",slotid);
    const Customer = localStorage.getItem('customer_id');
    //  console.log("id mobile",pro_id)
    axios.post(`https://market.jprtechnosoft.com/api/payment_razor?customer_id=${Customer}&shipping_id=${Ship_id}&shot_book=${slotid}`)
        .then(res => {
            console.log("responce api razaor payment", res);
            setUserdata(res.data.result.order_id);
            // console.log("pay data rozor",setUserdata(res.data.result));
            console.log("pay data ",res.data.result.order_id);
            localStorage.setItem('order_id', res.data.result.order_id)


            setvaluedata(res.data.result.data_roz)
            console.log("payment data rozor",res.data.result.data_roz.amount);
            localStorage.setItem('amount_id', res.data.result.data_roz.amount)
            localStorage.setItem('razorpay_id', res.data.result.data_roz.order_id)
            // localStorage.setItem('order_id', res.data.result);

           
        })
        .catch(error => {
            console.log(error)
        })
}, [])




useEffect(() => {
    const razor_pay=localStorage.getItem('razorpay_id');
    
    const order = localStorage.getItem('order_id');
console.log("slot time avb",order);
    const Customer = localStorage.getItem('customer_id');
    const payment_data=localStorage.getItem('razorpay_payment_id_data');
    console.log("payment id data",payment_data)
    axios.post(`https://market.jprtechnosoft.com/api/razor_verify?order_id=${order}&customer_id=${Customer}&razorpay_order_id=${razor_pay}&razorpay_payment_id=${payment_data}`)
        .then(res => {
            console.log("responce razorpay verify api", res);
            setUserdata(res.data.result); 
        })
        .catch(error => {
            console.log(error)
        })
}, [])


    async function displayRozerpay()  {
        
        const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if(!res){
            alert("Your payment is failed ,are you online ?");
            
        }
        const payment_capture =1;
        const amount = localStorage.getItem('amount_id');
        console.log("amount data",amount);
        const orderId=localStorage.getItem('order_id')
        console.log("oder_id data value",orderId);

        // const amount = 500;
        const currency = 'INR';
        
        const option = {
            amount:amount * 100 ,
             currency,
              receipt:shortid.generate(),
               payment_capture, 
        }
        const data = () => {
            try{
                const responce = razorpay.orders.create(option);
                console.log("payment gateway",responce);
                res.json({
                    id:responce.orderId,
                    currency:responce.currency,
                    amount:responce.amount,
            
                })
             } catch(error){
                 console.log(error);
            
             }
        }
        const options = {
            key: __DEV__ ? 'rzp_test_yS689osKp1ivNb' : 'PRODUCTION_KEY', // Enter the Key ID generated from the Dashboard
            currency:data.currency,
            order_id:data.orderId,
            amount:amount*100 ,
            "name": "ChotuGrocery",
            "description": "Thank you for purchase item",
            "image": "assets/image/chotuimage.jpeg",
            "handler": function (response){
                alert(response.razorpay_payment_id);
                localStorage.setItem('razorpay_payment_id_data',response.razorpay_payment_id)
                // alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                name,
            },
            
        };
        const PaymentObject = new window.Razorpay(options)
        PaymentObject.open();
 
    }


    

    return (
        <>
                                        
            <HamburgerMenu />
        
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="11">
                        <div style={{ marginLeft: '150px', marginTop: "70px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>
                            <div style={{ maxHeight: "45px", marginBottom: "10px", marginTop: "20px" }}>
                                <ListGroup horizontal className="nchange_13" >
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>My cart</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>Delivery Address</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>Date & Time</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>Payment</ListGroup.Item>
                                </ListGroup>
                            </div>

                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                        <div style={{ marginLeft: '150px', marginTop: "10px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>
                            <MDBRow>
                                <MDBCol md="3" style={{ marginTop: '70px',display:'block',marginLeft:'auto',marginRight:'auto' }}>
                                    <img src={deposit} style={{ margin: '2px 10px' }} />
                                    <p onClick={displayRozerpay} 
                                     style={{fontSize:'30px',color:'black',fontWeight:'bold',marginLeft:'20px'}}>
                                        Pay Now 
                                        <span style={{color:'green'}}> Click Here</span></p>
                                </MDBCol>
                            </MDBRow>
                     
                            <MDBRow>
                                <MDBCol md="12">
                                    <div style={{ marginLeft: '200px', float: 'right', marginRight: '40px', fontSize: '16px' }}>
                                        <Button variant="success" style={{ padding: '10px 100px', borderRadius: '8px 8px 8px 8px',marginBottom:'20px' }} onClick={() => setshowtext(!showtext)}  >
                                            Confirm Order
                                            </Button>
                                        {showtext && <div><Orderconfirm /> </div>}
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCol>
                    
                </MDBRow>
            </MDBContainer>

          

        </>
    )
};
export default Paymentrouting