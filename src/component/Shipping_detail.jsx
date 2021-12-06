// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { Form, Button, ListGroup } from "react-bootstrap"

// function ShippingDetail(props) {
//     const [data, showdata] = useState(true);
//     const [userdata, setUserdata] = useState([]);
//         const [slotTime, setSlotTime] = useState('');

//     const handlepage = () => {
//         showdata(false);
//         window.location.href = '/date';

    
//     }
//     useEffect(() => {

//         const Customer = localStorage.getItem('customer_id');
//         const data_type=props.type_id;
//         console.log("api value data value itme",data_type);
//         axios.post(`http://13.126.77.1/api/addshippingaddress?customer_id=${Customer}&type=${data_type}`)
//             .then(res => {
//                 console.log("responce shipping id ", res);
//                 setUserdata(res.data.data);
                
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, [])
//   return (
//     <div>
//     <Button variant="success" style={{ padding: '10px 100px', borderRadius: '8px 8px 8px 8px', float: 'right', marginRight: '80px' }} onClick={handlepage} >
//     Confirm Address
//   </Button>
//     </div>
//   );
// }

// export default ShippingDetail;


               