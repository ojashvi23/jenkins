import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { truck_Image3 } from "../lib/utils";
import { money_Image3 } from "../lib/utils";
import { time_Image3 } from "../lib/utils";
import { check_Image3 } from "../lib/utils";
function MenuImage() {
  return (
    <>
      <div className="container-fluid">


        <div className="row" style={{marginTop:'12px', color: '#FFFFFF', boxShadow: '0px 2px 8px  #00000014' }}>

          <div className="col-md-3" style={{ marginTop: '20px',marginBottom:'22px' }}>
            <div className="shipping">
              <ul>
                <li>
                  <img src={truck_Image3} style={{ marginTop: '-10px' }}/></li>
              </ul>
            </div>
            <h5 style={{ fontSize: '16px', marginLeft: '96px',color:'#000000',fontSize:'14px',fontWeight:'Nunito' }}>Free Shipping&Return</h5>
            <span style={{ fontSize: '12px', marginLeft: '96px',color:'#000000',fontSize:'10px',fontWeight:'Nunito' }}>Free Shipping On All Order Over Rs 100</span>
          </div>

          <div className="col-md-3" style={{ marginTop: '20px' }}>
            <div className="shipping">
              <ul>
                <li>
                  <img src={money_Image3} style={{ marginTop: '-10px' }}/></li>
              </ul>
            </div>
            <h5 style={{ marginLeft: '96px', fontSize: '16px',color:'#000000',fontSize:'15px',fontWeight:'Nunito' }}>Money Back Guarantee</h5>
            <span style={{ marginLeft: '96px', fontSize: '12px',color:'#000000',fontSize:'10px',fontWeight:'Nunito'  }}>100% Money Back Guarantee</span>
          </div>

          <div className="col-md-3" style={{ marginTop: '20px' }}>
            <div className="shipping">
              <ul>
                <li>
                  <img src={time_Image3} style={{ marginTop: '-10px' }}/></li>
              </ul>
            </div>
            <h5 style={{ marginLeft: '96px', fontSize: '16px',color:'#000000',fontSize:'16px',fontWeight:'Nunito' }}>Online Support 24/7</h5>
            <span style={{ marginLeft: '96px', fontSize: '12px',color:'#000000',fontSize:'12px',fontWeight:'Nunito'  }}>we are always happy to assist You</span>
          </div>

          <div className="col-md-3" style={{ marginTop: '20px' }}>
            <div className="shipping" >
              <ul>
                <li>
                  <img src={check_Image3} style={{ marginTop: '-10px' }}/></li>
              </ul>
            </div>
            <h5 style={{ marginLeft: '96px', fontSize: '16px',color:'#000000',fontSize:'15px',fontWeight:'Nunito' }}>QualityAssurance</h5>
            <span style={{ marginLeft: '96px', fontSize: '12px',color:'#000000',fontSize:'11px',fontWeight:'Nunito'  }}>Check Every Product before Delivery</span>

          </div>
        </div>
      </div>
    </>
  )
}
export default MenuImage