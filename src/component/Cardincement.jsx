import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { } from "../lib/Redlabelimage";
import { Button, Overlay, Popover } from "react-bootstrap"
import axios from 'axios';
import { Daily_deals } from "../lib/utils";
import Incerdrement from './Incerdrement';

const Cardincement = (props) => {
  const [num, setNum] = useState(1);
  const increment = () => {
    // window.location.reload(false);
    const product1 = props.prouct;
    const Customer = localStorage.getItem('customer_id');
    setNum(num + 1);
    axios.post(`https://market.jprtechnosoft.com/api/updatetocard?customer_id=${Customer}&product_id=${product1}&quantity=${num}`)
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
    // window.location.reload(false);
    const product1 = props.prouct;
    console.log("data props", product1);
    const Customer = localStorage.getItem('customer_id');
    if (num > 0) {

      setNum(num - 1);
      axios.post(`https://market.jprtechnosoft.com/api/updatetocard?customer_id=${Customer}&product_id=${product1}&quantity=${num}`)
        .then(res => {
          console.log("responce api updatetocard", res);
          console.log("decrement card");
        })
    }
    else {
      setNum(0);
    }
  }
  let textInput = React.createRef();

  const [readMore, setReadMore] = useState(false);
  const [userdata, setUserdata] = useState([]);

  const extraContent =
    <div>
      <div className="quantity" style={{ marginTop: '20px', textAlign: 'center', marginBottom: '10px', fontWeight: 'bold', color: 'black', fontSize: '20px' }}>
      <Button onClick={decrement} variant="outline-success" style={{color:'black',fontWeight:'bold'}}>-</Button>{' '}
        {/* <span onClick={decrement}>-</span> */}
        <span style={{ marginLeft: '20px' }} ><input type="text" value={num} ref={textInput}  maxlength="1" size="1" style={{textAlign:'center'}} /></span>
        {/* <span  onClick={increment}>+</span> */}
        <Button onClick={increment} variant="outline-success" style={{color:'black',fontWeight:'bold', marginLeft: '20px'}}>+</Button>{' '}

      </div>

    </div>


  const linkName = readMore ? '' : <Button variant="outline" value="1" style={{ borderColor: ' #03A305', marginLeft: '80px', marginTop: '20px', marginBottom: '20px' }} >
    Add to  <img src={Daily_deals} /> </Button>
    
  return (
    <>
      <a className="read-more-link" onClick={() => {
        setReadMore(!readMore)
        const product1 = props.prouct;
        console.log("data props", product1);
        const Customer = localStorage.getItem('customer_id');
        //  console.log("id mobile",pro_id)
        const qua = 1;
        console.log("quanity value", qua)
        axios.post(`https://market.jprtechnosoft.com/api/addtocard?customer_id=${Customer}&product_id=${product1}&quantity=${qua}`)
          .then(res => {
            console.log("responce api addtocard", res);
            console.log("hii");
            setUserdata(res.data.result);
          })
          .catch(error => {
            console.log(error)
          })


      }}>

        <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'green' }}>{linkName}</span>
      </a>
      {readMore && extraContent}

    </>

  );
}

export default Cardincement;