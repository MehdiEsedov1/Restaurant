import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
import Typography from '@mui/material/Typography';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Dropdownmenu from './MUIComponents/Dropdownmenu.js';

export default function Header() {

    const fontStyle = {
        fontWeight: "bold"
    }

    return (
        <div className='Header'>
            <div className="header-container">
                <Link to='/'>
                    <img className='logo' src={logo} alt="Hamburger" />
                </Link>
                <div className='pages'>
                    <Link to='/'><Typography variant='h5' sx={fontStyle}>HOME</Typography></Link>
                    <Link to='/menu'><Typography variant='h5' sx={fontStyle}>MENU</Typography></Link>
                    <Link to='/about'><Typography variant='h5' sx={fontStyle}>ABOUT</Typography></Link>
                    <Link to='/faq'><Typography variant='h5' sx={fontStyle}>FAQ</Typography></Link>
                </div>
                <div className="side-bar">
                    <Dropdownmenu />
                    <Link to='/basket'>
                        <ShoppingBasketIcon className='basket-icon' sx={{
                            fontSize: "2.7rem",
                            color: "white"
                        }} />
                    </Link>
                </div>
            </div>
        </div>
    )
}