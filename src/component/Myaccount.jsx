import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { mobileno, order, address, logout } from "../lib/utils";
import Mainfile from "./Mainfile";
import Myorder from "./Myorder";
const Myaccount = (props) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const [data, setdata] = useState(false);
    const [logout, setLout] = useState(true);


    // const bgChange = () =>{
    //  setdata(true);
    // }

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const handlePage = () => {
        setdata(false)
        window.location.href = 'account'
    }
    const addresspage = () => {
        setdata(true)
        window.location.href = 'addressone'
    }

const  LogoutPage = () => {
    window.location.href=<Mainfile />
    const Customer_data = localStorage.getItem('customer_id');
    const session_data = localStorage.getItem('session_id');
    axios.post(`http://13.126.77.1/api/logout?session_id=${session_data}&customer_id=${Customer_data}`)
      .then(res => {
        console.log("responce api logout", res);
        setLout(res.data);
      })
      .catch(error => {
        console.log(error)
      })
  }




    const buttonpage = () => {


        return (
            <div ref={ref}>
                {/* <Button variant="info" onClick={handleClick}>Myaccount</Button> */}
                <p onClick={handleClick}>Myaccount</p>
                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref.current}
                    containerPadding={20}
                >
                    <Popover id="popover-contained">


                        <Popover.Content style={{ width: '280px', background: 'white' }}>
                            <img src={mobileno} />
                            <span className="text_item" >+91-7835332564</span>
                        </Popover.Content>
                        <Popover.Content style={{ width: '280px', background: 'white' }}>
                            <img src={order} />
                            <span className="text_item" onClick={handlePage}>My order</span>
                            <p style={{ marginLeft: '50px' }}>View recent order</p>
                        </Popover.Content>
                        <Popover.Content style={{ width: '280px', background: 'white' }}>
                            <img src={address} />
                            <span className="text_item" onClick={addresspage}>My Address</span>
                            <p style={{ marginLeft: '50px' }} onClick={addresspage}>update/edit delivery address</p>
                        </Popover.Content>
                        <Popover.Content style={{ width: '280px', background: 'white' }}>
                            <img src={logout} />
                            <span className="text_item" onClick={LogoutPage} >Logout</span>
                        </Popover.Content>
                    </Popover>
                </Overlay>
            </div>



        );
    }


    const secondpage = () => {
        return (
            <>
                <Myorder />
            </>
        )
    }


    return (
        <>
            {data ? secondpage() : buttonpage()}
        </>
    )




}
export default Myaccount