import React from "react";

import { Container, Jumbotron } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';

import Menu from "./Menu";

//import {setLastLocation} from "../../lib/global";

const Base = ({
    children,
    reload
}) => {
    // setLastLocation();
    return (
        <div>
            <Menu />

            <Container>
                <ToastContainer />
                {children}
            </Container>

           
        </div >
    );
};

export default Base;
