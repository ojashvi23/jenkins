import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

function GetFootercategory(props) {

  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const params = new URLSearchParams();
    const itemvalue = props.match.params.id;
    console.log("category value peoduct id", itemvalue);
    params.append('id', itemvalue);
    axios.post('https://market.jprtechnosoft.com/api/getproductbycategoryid',itemvalue)

      .then(res => {
        console.log("responce api subfooter", res);
        setUserdata(res.data.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  


  return (
    <div>
      <h4 style={{marginTop:'25px',fontWeight:'bold'}}>Category</h4>
     {userdata.map((elem, index) => (
 
      <p style={{marginTop:'20px'}}>{elem.product_name}</p>  
     ))}
    </div>
  );
}

export default GetFootercategory;
