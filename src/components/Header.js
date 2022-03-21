import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <div className='container'>
            <a href = "/"><span><ArrowBackIcon /></span></a>
            <Typography variant = "h5" component = "h2">
                Privacy Settings
            </Typography>
        </div>
    )
}