import React from 'react';
import { useState } from 'react';
import Mobilecartlogin from './Mobilecartlogin';
const Home = () => {

    const [data, setData] = useState(false);

    const bgChange = () => {
        setData(true);

    }
    const buttonPage = () => {
        return (
            <> <h1>hi</h1> <button onClick={bgChange} >Submit</button> </>
        )
    }

    const secondPage = () => {
        return (
            <>
                <Mobilecartlogin />
            </>
        )
    }
    return (
        <>
            { data ? secondPage() : buttonPage()}
        </>
    )



}
export default Home