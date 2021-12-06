import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { } from "../lib/Redlabelimage";
import { Button, Overlay, Popover } from "react-bootstrap"

const Readmorechilli = (props) => {
  const [readMore, setReadMore] = useState(false);
  const extraContent =
    <div >
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            {/* <h5 style={{ marginTop: '24px', fontWeight: 'bold', fontSize: '16px', color: '#222222' }}>Description</h5> */}
            <span style={{ fontSize: '14px', color: '#222222' }}>
               Red Label tea any time of the day and increase togetherness.
              The tea has a high Quality blend leaves with rich taste and flover.Every cup of the Brooke bond tea is brewed with best-chosen tea leaves.
              The tea leaves give rich colour and refreshing taste and has healthy flavonoids. The xip lock tea bag help preserve the tea for long and helps increase its shelf life.

                        </span>
            <h5 style={{ marginTop: '40px', fontWeight: 'bold', fontSize: '16px', color: '#222222' }}>Ingredients</h5>
            <span style={{ fontSize: '14px', color: '#222222' }}> Tea Leaves</span>
            <h5 style={{ marginTop: '40px', fontWeight: 'bold', fontSize: '16px', color: '#222222' }}>Shelf Life</h5>
            <span style={{ fontSize: '14px', color: '#222222' }}>12 Months</span>
            <h5 style={{ marginTop: '40px', fontWeight: 'bold', fontSize: '16px', color: '#222222' }}>Manufacturer Details</h5>
            <span style={{ fontSize: '14px', color: '#222222' }}>
              Hindustan Unilever Limited ,Unilever House,B D Sawant Marg, Chakala Anderi E,Mumbai-400099.
                        </span>
            <h5 style={{ marginTop: '40px', fontWeight: 'bold', fontSize: '16px', color: '#222222' }}>Country Of Origin</h5>
            <span style={{ fontSize: '14px', color: '#222222' }}>India</span>
            <h5 style={{ marginTop: '40px', fontWeight: 'bold', fontSize: '16px', color: '#222222' }}>Disclaimer</h5>
            <span style={{ fontSize: '14px', color: '#222222' }}>
              Every effort is made to maintain the accuracy of all information.However , actual product packaging and materials may conatin more and/or different information.
              it is recommended not to solely rely on the information presented.

                        </span>
            <h5 style={{ marginTop: '40px', fontWeight: 'bold', fontSize: '16px', color: '#222222' }}>Seller</h5>
            <span style={{ fontSize: '14px', color: '#222222' }}>FNV Retail Pvt Ltd(https://bit.ly/2QoDoe)</span>




          </MDBCol>
        </MDBRow>
      </MDBContainer>


    </div>
  const linkName = readMore ? '' : 'View Detail '
  return (
    <>
      <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}>
        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#222222', marginLeft: '10px' }}>{linkName}</span>
      </a>
      {readMore && extraContent}

    </>
  );
}

export default Readmorechilli;