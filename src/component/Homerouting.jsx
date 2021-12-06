import React from 'react';
import {  withRouter } from 'react-router';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import Mycartrouting from './Mycartrouting';

const Homerouting = () => {
    return (
        <>
            <HamburgerMenu />        
            <Mycartrouting />
        </>

    )
};
export default withRouter(Homerouting);