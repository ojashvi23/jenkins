import React from 'react';
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function MenuBottom() {
  const [userdata, setUserdata] = useState([]);
  const [data, showdata] = useState(true)
  useEffect(() => {
    axios.get('https://market.jprtechnosoft.com/api/get_category_with_subcategory')
      .then(res => {
        console.log("responce api menu item", res);
        setUserdata(res.data.result);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  
  
  

  return (
    <>
      <div className="App">
        <div style={{ color: '#FFFFFF', boxShadow: '0px 4px 8px  #00000014', marginTop: '80px' }}>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {userdata.map((elem, index) => (
                  <NavDropdown title={elem.category_name} id="basic-nav-dropdown" style={{ fontWeight: 'bold', fontSize: '11px', marginLeft: '-10px' }}>
                    {elem.subcategory.map((val, ind) => (
                      <NavDropdown.Item href={'/subitem/category_id=' + val.id}>{val.category_name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  )

}
export default MenuBottom;
