// import React from 'react';

import { Box, Button, Typography } from "@mui/material";
import plane from '../../assets/plane.jpg';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useState } from "react";
import AirTicket from "./AirTicket";
import Hotel from "./Hotel";
import Holiday from "./Holiday";

const Banner = () => {
    const [isActive, setisActive] = useState('air-ticket')


    return (
        <Box
            sx={{
                height: {
                    xs: '800px',
                    sm: '800px',
                    md: '800px',
                    lg: '700px'
                },
                width: '100%',
                backgroundImage: `url(${plane})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'rgba(253, 0, 173, 0.3)',
                    // position: "relative"
                }}>
                <Typography variant={"h3"} sx={{
                    fontSize: {
                        xs: '35px',
                        sm: '35px',
                        md: '35px',
                        lg: '45px'
                    }, color: 'white',
                    paddingX: {
                        xs: '20px',
                        sm: '80px',
                        md: '100px',
                        lg: '150px'
                    }, paddingTop: '50px'
                }}>
                    Let`s make your adventure
                </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 0, width: "100%" }}>
                <Box sx={{
                    position: 'absolute', top: '-36px', left: {
                        xs: '20px',
                        sm: '80px',
                        md: '100px',
                        lg: '150px'
                    }
                }}>
                    <Button
                        value={'air-ticket'}
                        onClick={() => setisActive('air-ticket')}
                        variant="contained"
                        sx={isActive === 'air-ticket' ? {
                            span: {
                                color: 'primary.dark'
                            },
                            color: 'white',
                            backgroundColor: 'primary.main',
                            textTransform: 'capitalize',
                            letterSpacing: '.1rem',
                            boxShadow: 'none',
                            borderRadius: '5px 5px 0 0',
                            marginRight: '3px',
                            ":hover": {
                                boxShadow: 'none',
                                backgroundColor: 'primary.main'
                            },
                        } : {
                            color: 'white',
                            textTransform: 'capitalize',
                            letterSpacing: '.1rem',
                            boxShadow: 'none',
                            borderRadius: '5px 5px 0 0',
                            marginRight: '3px',
                            backgroundColor: 'secondary.main',
                            ":hover": {
                                boxShadow: 'none',
                                backgroundColor: 'primary.main'
                            },
                        }}>
                        <span>
                            <AirplanemodeActiveIcon sx={{
                                marginRight: '4px',
                                fontSize: '18px',
                            }} />
                        </span>
                        Air Ticket
                    </Button>
                    <Button
                        onClick={() => setisActive('hotel')}
                        variant="contained"
                        sx={isActive === 'hotel' ? {
                            span: {
                                color: 'primary.dark'
                            },
                            color: 'white',
                            backgroundColor: 'primary.main',
                            textTransform: 'capitalize',
                            letterSpacing: '.1rem',
                            boxShadow: 'none',
                            borderRadius: '5px 5px 0 0',
                            marginRight: '3px',
                            ":hover": {
                                boxShadow: 'none',
                                backgroundColor: 'primary.main'
                            },
                        } : {
                            color: 'white',
                            textTransform: 'capitalize',
                            letterSpacing: '.1rem',
                            boxShadow: 'none',
                            borderRadius: '5px 5px 0 0',
                            marginRight: '3px',
                            backgroundColor: 'secondary.main',
                            ":hover": {
                                boxShadow: 'none',
                                backgroundColor: 'primary.main'
                            },
                        }}
                    >
                        <span>
                            <ApartmentIcon sx={{
                                marginRight: '4px',
                                fontSize: '18px',
                            }} />
                        </span>
                        Hotel
                    </Button>
                    <Button
                        onClick={() => setisActive('holiday')}
                        variant="contained"
                        sx={isActive === 'holiday' ? {
                            span: {
                                color: 'primary.dark'
                            },
                            color: 'white',
                            backgroundColor: 'primary.main',
                            textTransform: 'capitalize',
                            letterSpacing: '.1rem',
                            boxShadow: 'none',
                            borderRadius: '5px 5px 0 0',
                            marginRight: '3px',
                            ":hover": {
                                boxShadow: 'none',
                                backgroundColor: 'primary.main'
                            },
                        } : {
                            color: 'white',
                            textTransform: 'capitalize',
                            letterSpacing: '.1rem',
                            boxShadow: 'none',
                            borderRadius: '5px 5px 0 0',
                            marginRight: '3px',
                            backgroundColor: 'secondary.main',
                            ":hover": {
                                boxShadow: 'none',
                                backgroundColor: 'primary.main'
                            },
                        }}
                    >
                        <span>
                            <TravelExploreIcon sx={{
                                marginRight: '4px',
                                fontSize: '18px',
                            }} />
                        </span>
                        Holidays
                    </Button>
                </Box>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    height: {
                        xs: '580px',
                        sm: '500px',
                        md: '320px',
                        lg: '320px'
                    }, backgroundColor: 'rgba(170, 0, 80, 0.9)',
                    paddingX: {
                        xs: '20px',
                        sm: '80px',
                        md: '100px',
                        lg: '150px'
                    }, paddingY: '20px'
                }}>

                    {isActive === 'air-ticket' && <AirTicket />}
                    {isActive === 'hotel' && <Hotel />}
                    {isActive === 'holiday' && <Holiday />}
                </Box>
            </Box>

        </Box>
    );
};

export default Banner;