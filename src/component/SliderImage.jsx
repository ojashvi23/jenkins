import React, { useEffect, useState } from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";

function SliderImage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [userdata , setuserData] = useState([]);

    useEffect(() => {
        axios.get('https://market.jprtechnosoft.com/api/getslider')
        .then(res => {
            console.log("response api silder", res);
            setuserData(res.data.result)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div className="container-fluid" style={{marginTop:'50px'}}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            {userdata.map((elem,ind) => (

                <Carousel.Item>
                         <img src={elem.slider}
                         className="d-block w-100"  
                     /> 
                   
                </Carousel.Item>
                 ))}
                </Carousel>
           
        </div>
    );
}

export default SliderImage 