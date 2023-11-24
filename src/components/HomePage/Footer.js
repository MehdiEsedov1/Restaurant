import React from 'react';
import logo from '../../Assets/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

export default function Footer() {

  const iconStyle = {
    fontSize: "4rem",
    cursor: "pointer"
  }

  const fontStyle = {
    color: 'white !important'
  }

  return (
    <div className='footer'>
      <div className='footer-left'>
        <div className='footer-logo'>
          <img className='footer-img' src={logo} alt="Hamburger" />
        </div>
        <div className='footer-about'>
          <Typography>Terms of Service · Privacy Policy</Typography>
          <Typography>Demo or it didn't happen.</Typography>
          <Typography>©2023 Restoran</Typography>
          <Typography>Restoran</Typography>
        </div>
        <div className='footer-social-medias'>
          <InstagramIcon style={iconStyle} />
          <FacebookIcon style={iconStyle} />
          <YouTubeIcon style={iconStyle} />
          <TwitterIcon style={iconStyle} />
        </div>
      </div>
      <div className='footer-center'>
        <div className='footer-images'>
          <div className='footer-img'></div>
        </div>
        <div className='footer-section-container'>
          <div className='footer-sections'>
            <Link to='/'><Typography sx={fontStyle}>HOME</Typography></Link>
            <Link to='/menu'><Typography sx={fontStyle}>MENU</Typography></Link>
            <Link to='/basket'><Typography sx={fontStyle}>BASKET</Typography></Link>
            <Link to='/about'><Typography sx={fontStyle}>ABOUT</Typography></Link>
          </div>
          <div className='footer-sections'>
            <Link to='/faq'><Typography sx={fontStyle}>FAQ</Typography></Link>
          </div>
        </div>
      </div>
      <div className='footer-right'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12139.845152322221!2d49.717012276790854!3d40.47612143133381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403085750a9f3d61%3A0x24e5c126412d760!2sBaku%20Engineering%20University!5e0!3m2!1saz!2saz!4v1696619500180!5m2!1saz!2saz"
          className='map'
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}