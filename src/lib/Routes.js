import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homerouting from '../component/Homerouting';
import App from '../App';
import Mobileverification from '../component/Mobileverification';
import Daterouting from "../component/Daterouting";
import Paymentrouting from '../component/Paymentrouting';
import Accountorder from '../component/Accountorder';
import Addresslogin from '../component/Addresslogin';
import Myorder from '../component/Myorder';
import Singleitemadd from '../component/Singleitemadd';
import Singlecategory from '../component/Singlecategory';
import RedLabelchilli from '../component/RedLabelchilli';
import Subcategoryitem from '../component/Subcategoryitem';
import Footersub from '../component/Footersub';
import GetFootercategory from '../component/GetFootercategory';
import SearchApi from '../component/SearchApi';
import ViewAllbiscut from '../component/ViewAllbiscut';
import ViewPouplar from '../component/Viewpouplar';
import Viewbabycare from '../component/Viewbabycare';
import Viewdiscount from '../component/Viewdiscount';
import Viewvegtables from '../component/Viewvegetables';
import Viewpersonal from '../component/Viewpersonal';
import Discountclick from '../component/Discountclick';
import Viewfruit from '../component/Viewfruit';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Homerouting} />
          <Route path="/mobile" component={Mobileverification} />
          <Route path="/date" component={Daterouting} />
          <Route path="/pay" component={Paymentrouting} />
          <Route path="/account" component={Accountorder} />
          <Route path="/addressone" component={Addresslogin} />
          <Route path="/myordervale" component={Myorder} />
          <Route path="/orderconfirm" component={Singleitemadd} />
          <Route path="/singleitem" component={Singlecategory} />
          <Route path="/viewallbis" component={ViewAllbiscut} />
          <Route path="/orderitem" component={ViewPouplar} />
          <Route path="/viewbaby" component={Viewbabycare} />
          <Route path="/viewdiscount" component={Viewdiscount} />
          <Route path="/viewveg" component={Viewvegtables} />
          <Route path="/viewper" component={Viewpersonal} />
          <Route path="/viewfruit" component={Viewfruit} />
          <Route path="/searchpath" component={SearchApi} />

          <Route path="/addtealabel" component={RedLabelchilli} />
          <Route path="/subitem/:category_id" component={Subcategoryitem} />
          <Route path="/subitem1/:id" component={Footersub} />
          <Route path="/footersubvalue/:id" component={GetFootercategory} />
          <Route path="/apiseacrh/:search" component={SearchApi} />

        </Router>
      </div>
    );
  }

}

export default Routes;
