import React from 'react';
import Typography from '@mui/material/Typography';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

export default function Error(props) {

    return (
        <div className='error'>
            <div className='top'>
                {props.warning
                    ?
                    <Typography>You havn't access</Typography>
                    :
                    <Typography>Page not found</Typography>
                }
            </div>
            <div className='bottom'>
                <Link to='/'><img src={logo} /></Link>
            </div>
        </div>
    )
}