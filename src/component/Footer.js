import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap"
import { facebook } from "../lib/utils";
import { twitter } from "../lib/utils";
import { Linkdin, footerimg } from "../lib/utils";
import axios from "axios";
const Footer = (props) => {
  const [userdata, setUserdata] = useState([]);
  const [data, showdata] = useState(true)
  const [contact, getcontact] = useState([]);
  const [copyright, getCopyright] = useState([]);
  const [emailid, setemail] = useState([]);

  let textInput = React.createRef();
   

  let onOnclickHandler = (event) => {

      axios.post(`https://market.jprtechnosoft.com/api/subscribenewsletter?email=${textInput.current.value}`)
          .then(res => {
              console.log("response api", res);
            setemail(res.data.result);
              console.log("data email api",res.data.result);
              alert(res.data.message);
          })
  };

  useEffect(() => {
    axios.get('https://market.jprtechnosoft.com/api/getallcategory')
      .then(res => {
        console.log("responce api", res);
        setUserdata(res.data.result);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {

    axios.get('https://market.jprtechnosoft.com/api/getcontactdetail')
      .then(res => {
        console.log('response api contact us', res);
        getcontact(res.data.result);

      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  useEffect(() => {

    axios.get('https://market.jprtechnosoft.com/api/getcopyright')
      .then(res => {
        console.log('response copyright data', res);
        getCopyright(res.data.result);

      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  return (
    <>
      <p style={{ marginTop: '200px' }}>.</p>
      <MDBContainer fluid style={{ marginTop: '300px' }}>
        <MDBRow>
          <MDBCol md="4" >
            <h5 style={{ marginLeft: '80px', fontSize: '16px', fontWeight: 'bold', color: '#222222', marginTop: '60px' }}>Categories</h5>
            {userdata.map((elem, index) => (
              <ul >
                <a href={'/subitem1/id=' + elem.id} >
                  <li style={{ listStyle: 'none', float: 'right', marginLeft: '30px', marginTop: '25px', color: 'black' }} >
                    <span>
                      {elem.category_name}
                    </span>
                  </li>
                </a>
              </ul>
            ))}
          </MDBCol>

          <MDBCol md="4">
            <div style={{ marginLeft: '100px' }}>
              <h5 style={{ fontSize: '16px', fontWeight: 'bold', color: '#222222', marginTop: '60px' }}>Contact Us</h5>
              {contact.map((elem, index) => (
                <div>

              <h5 style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '30px' }}>Address</h5>
              <p style={{ fontSize: '14px', color: '#222222' }}>{elem.contact_address}</p>
              <h1 style={{ fontWeight: 'bold', marginTop: '16px', fontSize: '14px', color: '#222222' }}>Phone:</h1>
              <p style={{ fontSize: '14px' }}>{elem.phone_number}</p>
              <h5 style={{ fontWeight: 'bold', marginTop: '16px', fontSize: '14px' }}>email:</h5>
              <p style={{ fontSize: '14px', color: '#222222' }}>{elem.email_address}</p>
              <img src={elem.facebook} style={{ marginTop: '20px' }} />
              <img src={elem.twitter} style={{ marginLeft: '20px', marginTop: '20px' }} />
              <img src={elem.linkedin} style={{ marginLeft: '20px', marginTop: '20px' }} />
              </div>
              ))}
            </div>
          </MDBCol>
          <MDBCol md="4">
            <h5 style={{ fontSize: '16px', fontWeight: 'bold', color: '#222222', marginTop: '60px' }}>Subscribe Newsletter</h5>
            <p style={{ marginTop: '16px', fontSize: '14px' }}>Get all the latest information on Events,Sales and offers
            <br />
            , Sign Up for NewsLetter Today</p>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1" >

                <Form.Control 
                type="email"
                ref={textInput}
                 placeholder="Email Address" 
                 style={{ marginTop: '16px', width: '364px', height: '48px' }}
                  />
                <Button
                 variant="success"
                  size="lg" block 
                  onClick={onOnclickHandler}
                  style={{ marginTop: '15px', marginTop: '16px', fontSize: '14px', width: '364px', height: '48px' }}
                  >
                  Subscribe
  </Button>
              </Form.Group>
              <img src={footerimg} style={{ width: '345px', marginTop: '36px' }} />



            </Form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 black">
        <MDBContainer fluid style={{ marginTop: '120px' }} >
        {copyright.map((elem, index) => (
<div>
          <h5 style={{ background: 'black', color: '#EFF1F3', padding: '10px', fontSize: '16px', fontWeight: 'bold' }}>{elem.copyright}
          </h5>
          </div>
        ))}
        </MDBContainer>
      </div>
    </>
  );
}

export default Footer;
