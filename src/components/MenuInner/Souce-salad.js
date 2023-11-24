import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Paper, Stack } from '@mui/material';
import salad from '../../Assets/salad.png';
import souz from '../../Assets/souz.png';

export default function Souce_salad() {

  return (
    <div className='menu'>
      <Stack direction="row" spacing={8} style={{
        height: '85vh',
        marginTop: '30px'
      }}>
        <Link to="souce">
          <Paper className='papers'>
            <img className='logo' src={souz} alt="burger" />
          </Paper>
        </Link>
        <Link to="salad">
          <Paper className='papers'>
            <div>
              <img className='logo' src={salad} alt="Pizza" />
            </div>
          </Paper>
        </Link>
      </Stack>
      <Outlet />
    </div>
  )
}