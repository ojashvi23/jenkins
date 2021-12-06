// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { minusbutton ,Plusbutton} from "../lib/utils";

// function Incerdrement(props) {
//     const [userdata, setUserdata] = useState([]);
//     const [valuedata, setvauledata] = useState([]);
//     const [data, showdata] = useState(false);
//     const [num,setNum] = useState(1);
//   const increment = () => {
//     const product1 = props.prouct;
//      const Customer = localStorage.getItem('customer_id');
//     setNum(num+1);
//     axios.post(`http://13.126.77.1/api/updatetocard?customer_id=${Customer}&product_id=${product1}&quantity=${num}`)
//     .then(res => {
//       console.log("responce api updatetocard", res);
//       console.log("increment card");
//       setUserdata(res.data.result);
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
//   const decrement = () => {
//     const product1 = props.prouct;
//     console.log("data props",product1);
//     const Customer = localStorage.getItem('customer_id');
//     if(num>0){
      
//       setNum(num-1);
//       axios.post(`http://13.126.77.1/api/updatetocard?customer_id=${Customer}&product_id=${product1}&quantity=${num}`)
//       .then(res => {
//         console.log("responce api updatetocard", res);
//         console.log("decrement card");
//       })
//     }
//     else{
//       setNum(0);
//     }
//   }



  


//   return (
//     <div>
//        <img src={minusbutton} onClick={decrement}    />
//     <span style={{ color: 'green', marginLeft: '15px', marginRight:'20px', marginTop: '100px' }} >{num}</span>
//     <img src={Plusbutton} onClick={increment} />

//     </div>
   
//   );
// }

// export default Incerdrement;
