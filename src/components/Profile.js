import React from 'react';
import Error from './Additional/Error.js';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export default function Profile() {

    const userInfos = JSON.parse(localStorage.getItem('userInfos'));

    return (
        <div>
            {userInfos != null
                ?
                <div className='profile'>
                    <div className='profile-container'>
                        <div className='profile-img'>
                            <Avatar src="/broken-image.jpg"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </div>
                        <div className='profile-infos-container'>
                            <div className='profile-infos'>
                                <Typography variant='h4'>Name : {userInfos.nickname}</Typography>
                            </div>
                            <div className='profile-infos'>
                                <Typography variant='h4'>E-mail : {userInfos.email}</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <Error warning={true} />
            }
        </div>
    )
}