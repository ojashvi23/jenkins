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
import Babycareimage from "../lib/Babycareimage";
import CardImage from "../lib/CardImage";
import Fruitimage from "../lib/Fruitimage";
import Persnalcareimage from "../lib/Persnalcareimage";
import Popularimage from "../lib/Popularimage";
import Vegatblesimage from "../lib/Vegatblesimage";
import MenuBar from "../core/Menu";
import MenuImage from './MeunImage';
import Addredlabeltea from './Addredlabeltea';
import Addredlabelteaimage from "../lib/Addredlabelteaimage";
import Bestsellingimage from "../lib/Bestsellingimage";
import Bestselling from './Bestselling';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import MenuBottom from '../container/MenuBottom';
import Mainfile from './Mainfile';

function Singleitemadd() {
  return (
    <div>
      <HamburgerMenu />
      {/* <MenuBottom />
      <SliderImage />
      <MenuImage /> */}
      <MenuBottom />
      <Mainfile />
      </div>
    
  );
};


export default Singleitemadd;
