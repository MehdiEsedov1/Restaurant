import { Typography } from '@mui/material';
import React from 'react';
import logo from '../Assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function About() {

  const navigator = useNavigate();

  return (
    <div className='about'>
      <div className='about-inner'>
        <Typography variant='h3' sx={{
          textAlign: 'center',
          color: 'white'
        }}>
          About our company
        </Typography>
        <Typography
          sx={{
            color: 'white',
            opacity: '0.8',
            marginTop: '30px'
          }}
          variant='h5'
        >
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Libero quaerat ab inventore co
          rporis nihil nemo laboriosam i
          taque nam, blanditiis veniam a
          liquam aspernatur laborum volu
          ptatem. Adipisci doloremque vo
          luptate illum debitis deleniti
          inventore aliquam vitae animi
          dicta magni laudantium, rati
          one nam cumque reprehenderit
          magnam sequi laborum dolore
          s et laboriosam! Praesentiu
          m nobis facere necessitatibus
          repudiandae aspernatur sed quas
          voluptas quam, illum, nihil mi
          nima harum eum labore nisi dol
          oribus officiis cupiditate volu
          ptatibus quibusdam vitae unde ne
          sciunt? Totam error assumenda et
          . Sit quisquam libero at, mollit
          ia beatae voluptates. Doloremque,
          ea illo id saepe in fugit esse s
          int rem nesciunt deserunt odit,
          voluptatibus nisi, molestias qui
          busdam!
        </Typography>
        <img className='logo' src={logo} onClick={() => { navigator('/') }} />
      </div>
    </div>
  )
}