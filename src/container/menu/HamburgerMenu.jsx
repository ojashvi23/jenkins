import React, { useEffect, useRef } from 'react';
import { Router } from "react-router-dom"
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { PLACE_HOLDER_IMAGE } from "../../lib/utils";
import { Location_Icon } from "../../lib/utils";
import { Login_Image,loc } from "../../lib/utils";
import { Cart_Image } from "../../lib/utils";
import CartValue from '../../CartValue';
import Myaccount from '../../component/Myaccount';
import Login from '../../component/Login';
import { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


// import { isAuthenticated } from "../../services/auth";

function HamburgerMenu(props) {
    const classes = useStyles();
    const [userdata1, setUserdata1] = useState([]);
    const [valuedata, setvauledata] = useState([])
    // const [userdata1, setUserdata1] = useState([]);
    const [value, setValue] = useState([])
    
// const InputEvent1 = (id) =>{
//     console.log(id);
//     axios.get(`http://13.126.77.1/api/search?search=${id}`)
//     .then(res => {
//                    console.log("response api data search", res);
//                     setData(res.data.result);
//                })
// }
useEffect(() => {

    const Customer = localStorage.getItem('customer_id');
    //  console.log("id mobile",pro_id)
    axios.post(`https://market.jprtechnosoft.com/api/gettocard?customer_id=${Customer}`)
        .then(res => {
            console.log("responce api show card api", res);
            console.log("hii");
            setUserdata1(res.data.result.cart_info);
            setvauledata(res.data.result);
            console.log("total price", res.data.result);

        })
        .catch(error => {
            console.log(error)
        })
}, [])

let textinput1 = useRef(null);

 const SearchItem = (e) => {
    e.preventDefault();
    localStorage.setItem('search',textinput1.current.value)
     const searchvalue=textinput1.current.value;

     console.log("api search",searchvalue)
     window.location.href='searchpath'
    //  console.log("id mobile",pro_id)
    // axios.get(`http://13.126.77.1/api/search?search=${searchvalue}`)
    //     .then(res => {
    //         console.log("responce search api data", res);
    //         setValue(res.data.result);
    //         // setvauledata(res.data.result);
    //         // console.log("total price", res.data.result);
    //         window.location.href='searchpath'
            
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
 }

const [text, setText] = useState("");
// const [data, setdata] = useState(false);
// const onSubmit = evt => {
//     setdata(true)
  
//   evt.preventDefault();
//   if (text === "") {
//     alert("Please enter something!");
//   } else {
//     window.location.href = 'searchpath'
//     setText("");
//   }
// };

// const onChange = evt => setText(evt.target.value);


    return (

        <div className={classes.grow} >

            <AppBar position="fixed" style={{ background: '#FFFFFF', boxShadow: '0px 5px 20px #0000000D' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleMenuOpen}
                    >
                        <MenuIcon style={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }} />
                    </IconButton>
                    <div >
                        <Typography variant="h6" noWrap >
                            <img src={PLACE_HOLDER_IMAGE} style={{ width: '50px', height: '50px', marginTop: '5px' }} />
                        </Typography>

                    </div>


                    <div>
                        <Typography variant="h6" noWrap style={{ marginLeft: '50px', color: '#000000', fontSize: '16px', marginTop: '8px',marginLeft:'15px' }}>
                            <img src={Location_Icon}  />
                           <span style={{marginLeft:'15px'}}>Location</span> <img src={loc} style={{marginLeft:'10px'}} />
          </Typography>



                    </div>
                   
                   
<div style={{ width: 600,marginLeft:'50px' }}>
{/* <Autocomplete

  freeSolo
  id="free-solo-2-demo"
  disableClearable
  options={userdata.map((option) => option.product_name)}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Search input"
       onChange={(event) => InputEvent1(event.target.value)}
      
      variant="outlined"
      // InputProps={{ ...params.InputProps, type: 'search' }}
      
    />
    
  )}
/> */}
 <form onSubmit={SearchItem}  className="bg-gray-200"  >
        <input
          type="text"
          name="text"
          placeholder="Search input"
         
        //   onChange={onChange}
          className="bg-white  outline-none"
          class="textinput" ref={textinput1}
          style={{padding:'8px 100px'}}
        />
        <button onClick={SearchItem} className="p-2 text-center text-blue-500 w-1/4 bg-white border-l">
          Search
        </button>
      </form>


</div>
                         


                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => props.setOpenCartDialog(true)}>
                            <Badge badgeContent={props.cartCount} color="secondary">
                                <Typography variant="h6" noWrap style={{}}>
                                    <img src={Cart_Image}  style={{marginTop:'10px'}} />
                                    <span style={{color:'green',fontSize:'14px',fontWeight:'bold'}}>{valuedata.quantity}</span>
                                </Typography>
                                <Typography style={{ marginRight: '80px', fontSize: '16px', color: '#000000', marginTop: '8px',marginLeft:'25px' }}>
                                    <CartValue />
                                </Typography>
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={props.menuId}
                            aria-haspopup="true"
                            onClick={props.handleProfileMenuOpen}
                            color="inherit"
                        >


                            <Typography variant="h6" noWrap>
                                <img src={Login_Image} />
                            </Typography>
                            <Typography style={{ marginRight: '80px', fontSize: '16px', color: '#000000', marginTop: '8px',marginLeft:'25px' }}>
                                <Login />

                            </Typography>

                        </IconButton>

                    </div>

                </Toolbar>
            </AppBar>
            {props.children}
        </div>
    );

}
      
const useStyles = makeStyles((theme) => ({
    width150: {
        width: 500,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            marginRight: theme.spacing(0),
        },
    },
    title: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: 'auto',
        [theme.breakpoints.down('md')]: {
            marginRight: 0,
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 77),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '90ch',
            
            
        },
    },
    sectionDesktop: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}));

export default HamburgerMenu;