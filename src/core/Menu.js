
import { withRouter } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import withWidth from '@material-ui/core/withWidth';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';


import HamburgerMenu from "../container/menu/HamburgerMenu";
// import OrderHistory from "../container/orderHistory/OrderHistory";
// import Profile from "../container/profile/Profile";

// import { signout, isAuthenticated } from "../services/auth";
// import {getCartCountValue} from "../services/user";


function MenuBar({ history, width, reload }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [openOrderDialog, setOpenOrderDialog] = React.useState(false);
    const [openCartDialog, setOpenCartDialog] = React.useState(false);
    const [openProfileDialog, setOpenProfileDialog] = React.useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [refreshCount, setRefreshCount] = useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isProfileMenuOpen = Boolean(anchorE2);
    // const userId = isAuthenticated() ? isAuthenticated().user.id : null;
    // const token = isAuthenticated() ? isAuthenticated().token : localStorage.getItem("guestToken");


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuOpen = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setAnchorE2(null)
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorE2}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isProfileMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => {
                history.push("/")
                handleMenuClose()
            }}>
                <ListItemIcon><HomeIcon /> </ListItemIcon>
                <ListItemText >Home</ListItemText>
            </MenuItem>

            <MenuItem onClick={() => {

            }}>
                <ListItemIcon>
                    <AccountCircle />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
            </MenuItem>

        </Menu>
    );

    let menui = 'primary-search-account-menu';

    return (
        <HamburgerMenu
            handleMenuOpen={handleMenuOpen}
            setOpenCartDialog={setOpenCartDialog}
            handleProfileMenuOpen={handleProfileMenuOpen}
            cartCount={cartCount}
        >
            {renderMenu}





        </HamburgerMenu>
    );

}

export default MenuBar;