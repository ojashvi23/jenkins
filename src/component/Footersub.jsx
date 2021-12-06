import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

function Footersub(props) {

  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const params = new URLSearchParams();
    const item = props.match.params.id;
    console.log("category value res", item);
    params.append('id', item);
    axios.post('https://market.jprtechnosoft.com/api/subcategory',item)

      .then(res => {
        console.log("responce api footer", res);
        setUserdata(res.data.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
 
 
  
  return (
    <div>
      <h4 style={{marginTop:'25px',fontWeight:'bold',marginLeft:'30px'}}>Category</h4>
     {userdata.map((elem, index) => (
      <a href={'/footersubvalue/:id='+elem.id}>
      <p style={{marginTop:'20px',marginLeft:'30px'}}>{elem.category_name}</p>  
      </a>
     ))}
    </div>
  );
}

export default Footersub;

