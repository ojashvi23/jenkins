import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { deleteImage } from "../lib/utils"
function Deletecard(props) {
  const [deldata, setdeldata] = useState(true);

  const deleteClick = () => {
    window.location.reload(false);
    const product1 = props.prouct;
    console.log("data props", product1);
    const cartitem_id = props.cartid;
    console.log("cart_id", cartitem_id);
    const Customer = localStorage.getItem('customer_id');
    axios.post(`https://market.jprtechnosoft.com/api/removefromcart?cart_id=${cartitem_id}&product_id=${product1}&customer_id=${Customer}`)
      .then(res => {
        console.log("responce api deleteitem", res);
        setdeldata(res.data.result);
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <img src={deleteImage} style={{ float: 'right' }} onClick={deleteClick} />

    </div>
  );
}

export default Deletecard;
