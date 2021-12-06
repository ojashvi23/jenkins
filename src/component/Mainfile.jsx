import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import '../index.css';
import App from '../App';
import CardComponent from './CardComponent';
import SliderImage from './SliderImage';
import Footer from './Footer';
import Popularcard from './Popularcard';
import Vegatbles from './Vegatbles';
import Fruit from './Fruit';
import Babycare from './Babycare';
import Persnalcare from './Persnalcare';
import CardImage from "../lib/CardImage";
import Popularimage from "../lib/Popularimage";
import MenuImage from './MeunImage';
import Addredlabeltea from './Addredlabeltea';
import Addredlabelteaimage from "../lib/Addredlabelteaimage";
import Bestselling from './Bestselling';
import { Daily_deals } from '../lib/utils';
import Dailydeals from './Dailydeals';


function Mainfile() {
  const [data, setdata] = useState(false)
  const bgChnagepage = () => {
    setdata(true)
    window.location.href = 'singleitem'
  }
  const bgChnageview = () => {
    setdata(true)
    window.location.href = 'viewallbis'
  }
  const bgChangeOrder = () => {
    setdata(true)
    window.location.href = 'orderitem'
  }
  const Viewbabyclick = () => {
    setdata(true)
    window.location.href = 'viewbaby'
  }

  const Viewdiscountclick = () => {
    setdata(true)
    window.location.href = 'viewdiscount'
  }
  const ViewVegclick = () => {
    setdata(true)
    window.location.href = ' viewveg'
  }
  const Viewpersonalclick = () => {
    setdata(true)
    window.location.href = ' viewper'
  }
  const Viewfruitclick = () => {
    setdata(true)
    window.location.href = 'viewfruit'
  }
  
 
 
  

  return (
    <div>
      <div style={{ padding: '10px' }}>
        <SliderImage />
      </div>
      <div><MenuImage /></div>
      
      <div style={{ color: '#FFFFFF', boxShadow: '0px 0px 5px  #00000014', padding: '10px' }}>
        <h2 className="discountcss" >
          Discount Offer
 <Button variant="success" className="buttoncard" onClick={Viewdiscountclick} >View All</Button></h2>
 </div>
 <div>
<CardComponent />
      </div>
      <div style={{ color: '#FFFFFF', boxShadow: '0px 1px 5px  #00000014', padding: '10px' }}>
        <h2 className="discountcss">
          Daily Deals
 <Button variant="success" className="buttoncard" onClick={bgChnagepage} >View All</Button></h2>
 </div>
 <div style={{marginTop:'20px'}}>
   <Dailydeals />
 </div>
 
      <div>
        <SliderImage />
      </div>

      <div style={{ color: '#FFFFFF', boxShadow: '0px 1px 5px  #00000014', padding: '10px' }}>
        <h2 className="discountcss">
          Best Selling
 <Button variant="success" className="buttoncard" onClick={bgChnageview} >View All</Button></h2>
      </div>
      <div>
      <Bestselling />
      </div>

      <div style={{ color: '#FFFFFF', boxShadow: '0px 1px 5px  #00000014', padding: '10px'}}>
        <h2 className="discountcss">
          Most Popular
 <Button variant="success" className="buttoncard" onClick={bgChangeOrder} >View All</Button></h2>
      </div>
      <div style={{marginTop:'20px'}}>
      <Popularcard />
      </div>
      <div>
        <SliderImage />
      </div>

      <div style={{ color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014', padding: '10px' }}>
        <h2 className="discountcss">
          Vegetables
 <Button variant="success" className="buttoncard" onClick={ViewVegclick}  >View All</Button></h2>
      </div>
      <div>
      <Vegatbles />
      </div>

      <div style={{ color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014', padding: '10px', marginTop: '450px' }}>
        <h2 className="discountcss">
          Fruits
          <Button variant="success" className="buttoncard" onClick={Viewfruitclick} >View All</Button></h2>
          </div>
          <div>
          <Fruit />
          </div>
      

      <div>

        <SliderImage />
      </div>
      <div style={{ color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014', padding: '10px' }}>

        <h2 className="discountcss">Baby Care
 <Button variant="success" className="buttoncard" onClick={Viewbabyclick} >View All</Button></h2>
        <Babycare />
      </div>
      <div style={{ color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014', padding: '10px' }}>
        <h2 className="discountcss" >Personal Care
 <Button variant="success" className="buttoncard" onClick={Viewpersonalclick} >View All</Button></h2>
      </div>
      <div>
      <Persnalcare />
      </div>
      <div>
      <Footer />
      </div>
    </div>

  );
}

export default Mainfile;
