import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { minusbutton, Plusbutton } from "../lib/utils";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from "react-bootstrap"

function Updateapi(props) {
  const [userdata, setUserdata] = useState([]);
  const [userdata1, setUserdata1] = useState([]);
  const [data, setData] = useState(true);
  const [valuedata, setvauledata] = useState([]);

  const [num, setNum] = useState(1);
  const increment = () => {
    const product1 = props.prouct;
    console.log("product id", product1)
    const Customer = localStorage.getItem('customer_id');
    setNum(num + 1);
    axios.post(`http://13.126.77.1/api/updatetocard?customer_id=${Customer}&product_id=${product1}&quantity=${num}`)
      .then(res => {
        console.log("responce api updatetocard", res);
        console.log("increment card");
        setUserdata(res.data.result);
      })
      .catch(error => {
        console.log(error)
      })
  }
  const decrement = () => {
    const product1 = props.prouct;
    console.log("data props", product1);
    const Customer = localStorage.getItem('customer_id');
    if (num > 0) {

      setNum(num - 1);
      axios.post(`http://13.126.77.1/api/updatetocard?customer_id=${Customer}&product_id=${product1}&quantity=${num}`)
        .then(res => {
          console.log("responce api updatetocard", res);
          console.log("decrement card");
        })
    }
    else {
      setNum(0);
    }
  }

  useEffect(() => {

    const Customer = localStorage.getItem('customer_id');
    //  console.log("id mobile",pro_id)
    axios.post(`http://13.126.77.1/api/gettocard?customer_id=${Customer}`)
        .then(res => {
            console.log("responce api show card api", res);
            console.log("hii");
            setUserdata1(res.data.result.cart_info);
            setvauledata(res.data.result);
            console.log("total price", res.data.result);
        })
        .catch(error => {
            console.log(error)
        })
}, [])


  return (
    <div>
      {/* <img src={minusbutton} style={{ marginLeft: '60px' }} onClick={decrement} /> */}
      <Button variant="outline-success" onClick={decrement} style={{ marginLeft: '60px',fontWeight:'bold',color:'green'}} >-</Button>{' '}
      {userdata1.map((elem, index) => (

      <span style={{ marginLeft: '15px' }}>{elem.quantity}</span>

      ))}
      {/* <img src={Plusbutton} onClick={increment} style={{ marginLeft: '15px' }} /> */}
      <Button variant="outline-success" onClick={increment} style={{ marginLeft: '15px',fontWeight:'bold',color:'green'}} >+</Button>{' '}

      <CloseIcon style={{ marginLeft: '50px' }}></CloseIcon>

    </div>
  );
}

export default Updateapi;
