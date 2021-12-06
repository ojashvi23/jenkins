import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mainfile from './component/Mainfile';
import Navbar from './component/Navbar';
import Route from './lib/Routes';


ReactDOM.render(
  <>
    <React.StrictMode>

      <Route/>
    
    
    </React.StrictMode>

  </>
  ,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
