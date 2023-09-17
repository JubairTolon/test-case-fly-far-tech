// import React from 'react';

import { Box, Typography } from "@mui/material";
import plane1 from '../../assets/plane1.jpg';
import plane2 from '../../assets/plane2.jpg';

const AllDeals = () => {
    return (
        <>
            <Box sx={{
                display: 'flex', justifyContent: 'space-between',
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row'
                },
                marginTop: {
                    xs: '60px',
                    sm: '60px',
                    md: '40px',
                    lg: '40px'
                }
            }}>
                <Box
                    sx={{
                        height: '350px',
                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '48%',
                            lg: '48%'
                        },
                        marginBottom: {
                            xs: '15px',
                            sm: '15px',
                            md: 0,
                            lg: 0
                        },
                        backgroundImage: `url(${plane1})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: '10px',
                        cursor: 'pointer',
                        ":active": {
                            backgroundColor: 'red'
                        }
                    }}
                >
                    <Typography variant="h1" sx={{ fontWeight: '600', letterSpacing: '.1ch', fontSize: '35px', color: 'white', marginLeft: '50px', marginTop: '30px' }}>Get Air Ticket at <br /> Low Price</Typography>
                </Box>
                <Box
                    sx={{
                        height: '350px',
                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '48%',
                            lg: '48%'
                        },
                        backgroundImage: `url(${plane2})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: '10px',
                        cursor: 'pointer',
                        ":active": {
                            opacity: '.9'
                        }
                    }}
                >
                </Box>
            </Box>
        </>
    );
};

export default AllDeals;