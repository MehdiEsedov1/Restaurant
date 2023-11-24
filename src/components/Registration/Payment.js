import React from 'react';
import logo from '../../Assets/logo.png';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Error from '../Additional/Error.js';

export default function Payment() {

    const userInfos = localStorage.getItem('userInfos');

    return (
        <div className='payment'>
            {userInfos != null
                ?
                (
                    <form>
                        <img src={logo} alt="Hamburger" />
                        <div className="container">
                            <div className="personal-info">
                                <Typography variant='h4' style={{ color: 'black' }}>Personal info</Typography>
                                <input type="text" id='name' placeholder='Name' />
                                <input type="text" id='surname' placeholder='Surname' />
                                <input type="e-mail" id='password' placeholder='E-mail' />
                            </div>
                            <div className="location">
                                <Typography variant='h4' style={{ color: 'black' }}>Location</Typography>
                                <input type="text" id='password0' placeholder='Location' />
                            </div>
                            <div className="time">
                                <Typography variant='h4' style={{ color: 'black' }}>Time</Typography>
                                <input type="time" id="timeInput" name="timeInput" required placeholder='Time' />
                                <input type="month" id="monthInput" name="monthInput" required></input>
                            </div>
                            <div className="card-data">
                                <div className='img-containers'>
                                    <div>
                                        <img src="https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg" alt="visa" style={{
                                            width: '70px',
                                            height: '40px'
                                        }} />
                                        <img src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg" alt="master" style={{
                                            width: '70px',
                                            height: '40px'
                                        }} />
                                    </div>
                                </div>
                                <input maxlength="16" type="text" placeholder='Card number' style={{
                                    marginBottom: '30px'
                                }} />
                                <div className="card-data-inner">
                                    <div className='Year-Month'>
                                        <input maxlength="2" type="text" placeholder='Year' />
                                        <Typography>/</Typography>
                                        <input maxlength="2" type="text" placeholder='Month' />
                                    </div>
                                    <div className='CVV'>
                                        <input maxlength="3" type="text" placeholder='CVV' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='payment-buttons-container'>
                            <Button
                                sx={
                                    {
                                        width: '100%',
                                        height: '50px',
                                        color: 'white'
                                    }
                                }
                                variant="contained"
                            >
                                <Typography variant='h5'>Order</Typography>
                            </Button>
                        </div>
                    </form>
                )
                :
                <Error warning={true} />
            }
        </div>
    )
}