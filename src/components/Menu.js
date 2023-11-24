import { Paper, Stack } from '@mui/material';
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import pizza from '../Assets/pizza.png';
import salad from '../Assets/salad.png';
import sweets from '../Assets/sweets.png';
import water from '../Assets/water.png';
import burger from '../Assets/burger.png';
import souz from '../Assets/souz.png';

export default function Menu() {

  const navigator = useNavigate();

  return (
    <div className='menu-4'>
      <Stack className='menu-4-grid' direction="row" spacing={8} style={{
        height: '85vh',
        marginTop: '30px'
      }}>
        <Paper className='papers' onClick={() => {
          navigator('dessert')
        }}>
          <img className='logo' src={sweets} alt="sweets" />
        </Paper>
        <Paper className='papers' onClick={() => {
          navigator('/menu/pizza-Burger')
        }}>
          <div>
            <img className='logo' src={pizza} alt="pizza" />
            <img className='logo' src={burger} alt="burger" />
          </div>
        </Paper>
        <Paper className='papers' onClick={() => {
          navigator('/menu/saucesalad')
        }} id='paper-3'>
          <img className='logo' src={salad} alt="salad" />
          <img className='logo' src={souz} alt="souz" />
        </Paper>
        <Paper className='papers' onClick={() => {
          navigator('/menu/drinks')
        }}>
          <img className='logo' src={water} alt="water" />
        </Paper>
      </Stack>
      <Outlet />
    </div>
  )
}