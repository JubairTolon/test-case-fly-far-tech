// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Box, Button } from '@mui/material';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: {
                xs: '50px',
                sm: '60px',
                md: '60px',
                lg: '80px'
            },
            paddingX: {
                xs: '20px',
                sm: '80px',
                md: '100px',
                lg: '150px'
            },
        }} >
            <Link to='/'>
                <Box
                    component='img'
                    src={logo}
                    alt='logo'
                    sx={{
                        width: {
                            xs: '70px',
                            sm: '80px',
                            md: '100px',
                            lg: '150px'
                        },
                    }}>
                </Box>
            </Link>
            <Button
                onClick={() => navigate('/login')}
                variant="contained"
                sx={{
                    backgroundColor: 'primary.dark',
                    color: 'white',
                    textTransform: "capitalize",
                    letterSpacing: '.1rem',
                    borderRadius: '6px',
                    boxShadow: 'none',
                    ":hover": {
                        boxShadow: 'none'
                    }
                }}>
                Sign In
            </Button>
        </Box >
    );
};

export default NavBar;